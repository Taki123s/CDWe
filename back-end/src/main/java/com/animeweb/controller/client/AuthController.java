package com.animeweb.controller.client;

import com.animeweb.dto.oauth.AuthResponseDTO;
import com.animeweb.dto.oauth.EmailRequest;
import com.animeweb.dto.oauth.LoginDTO;
import com.animeweb.dto.oauth.VerifyUser;
import com.animeweb.dto.user.RegisterDTO;
import com.animeweb.entities.EmailDetails;
import com.animeweb.entities.Role;
import com.animeweb.entities.User;
import com.animeweb.mapper.UserMapper;
import com.animeweb.repository.RoleRepository;
import com.animeweb.security.IntrospectRequest;
import com.animeweb.security.IntrospectResponse;
import com.animeweb.security.LogOutRequest;
import com.animeweb.security.SecurityConstants;
import com.animeweb.service.impl.EmailServiceImpl;
import com.animeweb.service.impl.UserServiceImpl;
import com.animeweb.service.mail.EmailService;
import com.nimbusds.jose.JOSEException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import java.text.ParseException;
import java.util.Collections;
import java.util.Date;
import java.util.Random;

@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    UserServiceImpl userService;
    @Autowired
    PasswordEncoder passwordEncoder;
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private EmailService emailService;
    @Autowired
    private EmailServiceImpl emailServiceImpl;
    @GetMapping("/username")
    public ResponseEntity<String> checkUserName(@RequestParam String userName){
        boolean isExist = userService.existUserName(userName);
        if(isExist) return new ResponseEntity<>("Username exist!",HttpStatus.BAD_REQUEST);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @PostMapping("/email")
    public ResponseEntity<String> sendEmail(@RequestBody RegisterDTO registerDto){
        boolean isExist = userService.existEmail(registerDto.getEmail());
        if(isExist) return new ResponseEntity<>("Email exist!",HttpStatus.BAD_REQUEST);
        if(userService.existUserName(registerDto.getUserName())) return new ResponseEntity<>("Username is exist", HttpStatus.BAD_REQUEST);
        User user = UserMapper.mapToRegisterUser(registerDto);
        user.setPassword(passwordEncoder.encode(registerDto.getPassword()));
        Role roles = roleRepository.findByName("USER").get();
        user.setRoles(Collections.singletonList(roles));
        Random random = new Random();
        int randomNumber = 100000 + random.nextInt(900000);
        user.setAuthCode(String.valueOf(randomNumber));
        Date currentDate = new Date();
        user.setExpiredAt(new Date(currentDate.getTime()+ SecurityConstants.JWT_EXPIRATION));
        user.setAvatarPicture("https://s0.smartresize.com/wallpaper/252/68/HD-wallpaper-anime-live-kurumi-tokisaki-art-anime-live-kurumi-tokisaki-art-anime.jpg");
        userService.saveUser(user);
        EmailDetails details = new EmailDetails(registerDto.getEmail(),"Đây là mã xác nhận tạo tài khoản của bạn: "+randomNumber +" mã xác nhận có hiệu lực trong 5 phút","Xác thực tạo tài khoản","");
        emailService.sendSimpleMail(details);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @PostMapping( "/register")
    public ResponseEntity<String> register(@RequestBody VerifyUser verifyUser){
        boolean isExist = userService.existEmail(verifyUser.getEmail());
        if(isExist) return new ResponseEntity<>("Email exist!",HttpStatus.BAD_REQUEST);
        if(userService.existUserName(verifyUser.getUserName())) return new ResponseEntity<>("Username is exist", HttpStatus.BAD_REQUEST);
        boolean isSuccess = userService.verifyUser(verifyUser);
        if(isSuccess){
            return new ResponseEntity<>("User registered success!",HttpStatus.OK);
        }else{
            return new ResponseEntity<>("Verify code is not valid hoặc đã hết hạn",HttpStatus.NOT_FOUND);
        }
    }
    @PostMapping("/logout")
    public ResponseEntity<String> logOut(@RequestBody LogOutRequest logOutRequest) throws ParseException, JOSEException {
        userService.logout(logOutRequest);
        return new ResponseEntity<>("Logout success!",HttpStatus.OK);
    }
    @PostMapping("/login")
    public ResponseEntity<AuthResponseDTO> login(@RequestBody LoginDTO loginDTO){
        String token = userService.authenticate(loginDTO);
        return new ResponseEntity<>(new AuthResponseDTO(token,true),HttpStatus.OK);
    }
    @PostMapping("/introspect")
    public ResponseEntity<IntrospectResponse> authenticate(@RequestBody IntrospectRequest introspectRequest) throws ParseException, JOSEException {
        return new ResponseEntity<>(userService.introspect(introspectRequest),HttpStatus.OK);

    }
    @PostMapping("/forget-password")
    public ResponseEntity<String > forgetPassword(@RequestBody EmailRequest email){
        System.out.println(email);
        String token = emailServiceImpl.generateTokenEmail(email.getEmail());
        String resetUrl = "http://localhost:3000/reset-password/" + token;
        EmailDetails details =new EmailDetails(email.getEmail(),  "Nhấp vào liên kết sau để đặt lại mật khẩu của bạn: " + resetUrl,"Đặt lại mật khẩu","");
        emailService.sendSimpleMail(details);
        return ResponseEntity.ok("Email đã được gửi.");

    }
    @PostMapping("/reset-password")
    public ResponseEntity<String > resetPassword(@RequestParam String token, @RequestParam String newPassword) {
        String email = emailServiceImpl.validateTokenEmail(token);
        if (email == null) {
            return ResponseEntity.ok("Liên kết đặt lại mật khẩu không hợp lệ hoặc đã hết hạn.");
        }
        User user = userService.findUserByEmail(email);
        if(user != null){
          user.setPassword(passwordEncoder.encode(newPassword));
          user.setUpdatedAt(new Date());
          userService.saveUser(user);
            return ResponseEntity.ok("Mật khẩu đã được cập nhật.");
        }else{
            return ResponseEntity.ok("Không tìm thấy user");
        }

    }

}