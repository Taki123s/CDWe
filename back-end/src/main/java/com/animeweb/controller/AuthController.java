package com.animeweb.controller;

import com.animeweb.dto.*;
import com.animeweb.entities.Role;
import com.animeweb.entities.User;
import com.animeweb.mapper.UserMapper;
import com.animeweb.repository.RoleRepository;
import com.animeweb.security.IntrospectRequest;
import com.animeweb.security.IntrospectResponse;
import com.animeweb.security.LogOutRequest;
import com.animeweb.service.impl.UserServiceImpl;
import com.nimbusds.jose.JOSEException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;


import java.text.ParseException;
import java.util.Collections;


@RestController
@RequestMapping("/auth")
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
}