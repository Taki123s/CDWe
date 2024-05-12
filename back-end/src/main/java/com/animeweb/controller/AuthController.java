package com.animeweb.controller;

import com.animeweb.dto.AuthResponseDTO;
import com.animeweb.dto.LoginDTO;
import com.animeweb.dto.RegisterDTO;
import com.animeweb.dto.UserDTO;
import com.animeweb.entities.Role;
import com.animeweb.entities.User;
import com.animeweb.mapper.UserMapper;
import com.animeweb.repository.RoleRepository;
import com.animeweb.security.IntrospectRequest;
import com.animeweb.security.IntrospectResponse;
import com.animeweb.service.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;


import java.util.Collections;
import java.util.List;


@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    UserServiceImpl userService;
    @Autowired
    PasswordEncoder passwordEncoder;
    @Autowired
    private RoleRepository roleRepository;


    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterDTO registerDto){
        if(userService.existUserName(registerDto.getUserName())){
            return new ResponseEntity<>("Username is exist", HttpStatus.BAD_REQUEST);
        }
        User user = UserMapper.mapToRegisterUser(registerDto);
        user.setPassword(passwordEncoder.encode(registerDto.getPassword()));
        Role roles = roleRepository.findByName("USER").get();
        user.setRoles(Collections.singletonList(roles));

        userService.saveUser(user);
        return new ResponseEntity<>("User registered success!",HttpStatus.OK);
    }
    @PostMapping("/login")
    public ResponseEntity<AuthResponseDTO> login(@RequestBody LoginDTO loginDTO){
        String token = userService.authenticate(loginDTO);
        return new ResponseEntity<>(new AuthResponseDTO(token,true),HttpStatus.OK);
    }
    @GetMapping("/test")
    public ResponseEntity<List<UserDTO>> getUsers(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return null;
    }
    @PostMapping("/introspect")
    public ResponseEntity<IntrospectResponse> authenticate(@RequestBody IntrospectRequest introspectRequest){
             return new ResponseEntity<>(userService.introspect(introspectRequest),HttpStatus.OK);

    }
}
