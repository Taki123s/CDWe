package com.animeweb.service.impl;

import com.animeweb.dto.oauth.LoginDTO;
import com.animeweb.dto.oauth.VerifyUser;
import com.animeweb.dto.user.UpdateUser;
import com.animeweb.entities.ExpiredToken;
import com.animeweb.entities.Role;
import com.animeweb.entities.User;
import com.animeweb.repository.ExpiredTokenRepository;
import com.animeweb.repository.UserRepository;
import com.animeweb.security.IntrospectRequest;
import com.animeweb.security.IntrospectResponse;
import com.animeweb.security.JwtGenerator;
import com.animeweb.security.LogOutRequest;
import com.nimbusds.jose.JOSEException;
import com.nimbusds.jwt.SignedJWT;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.text.ParseException;
import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ExpiredTokenRepository expiredTokenRepository;
    @Autowired
    private JwtGenerator jwtGenerator;
    @Autowired
    private CloudinaryService uploadService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUserName(username).orElseThrow(() -> new UsernameNotFoundException("User not found"));
        return new org.springframework.security.core.userdetails.User(user.getUserName(), user.getPassword(), mapRolesToAuthorities(user.getRoles()));
    }

    private Collection<GrantedAuthority> mapRolesToAuthorities(List<Role> roles) {
        return roles.stream().map(role -> new SimpleGrantedAuthority(role.getName())).collect(Collectors.toList());
    }

    public User findUserById(Long idUser) {
        return userRepository.findById(idUser).orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }

    public boolean existUserName(String userName) {
        return userRepository.existsByUserName(userName);
    }

    public boolean existEmail(String email) {
        return userRepository.existByEmail(email);
    }

    public void saveUser(User user) {
        userRepository.save(user);
    }

    public IntrospectResponse introspect(IntrospectRequest introspectRequest) throws ParseException, JOSEException {
        String token = introspectRequest.getToken();
        boolean isValid = true;
        try {
            SignedJWT verified = jwtGenerator.verifyToken(token);
        } catch (Exception e) {
            isValid = false;

        }
        return new IntrospectResponse(isValid);
    }

    public void logout(LogOutRequest logOutRequest) throws ParseException, JOSEException {
        SignedJWT verified = jwtGenerator.verifyToken(logOutRequest.getToken());
        String jit = verified.getJWTClaimsSet().getJWTID();
        Date expiredDate = verified.getJWTClaimsSet().getExpirationTime();
        expiredTokenRepository.save(new ExpiredToken(jit, expiredDate));
    }

    public String authenticate(LoginDTO loginDTO) {
        User user = userRepository.findByUserName(loginDTO.getUserName()).orElseThrow(() -> new RuntimeException("User not exits"));
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder(10);
        boolean authenticated = passwordEncoder.matches(loginDTO.getPassword(), user.getPassword());
        if (!authenticated) throw new RuntimeException("Wrong password!");
        return jwtGenerator.generateToken(user);
    }

    public boolean verifyUser(VerifyUser verifyUser) {
        Integer updatedRows = userRepository.updateUserVerificationStatus(verifyUser.getUserName(), verifyUser.getEmail(), verifyUser.getVerifyCode());
        return updatedRows > 0;
    }

    public User getUserById(String id) {
        return userRepository.findUserByid(Long.valueOf(id));
    }

    public User updateProfile(UpdateUser request) throws IOException {
        var user = userRepository.findById(request.getId()).orElseThrow();

        user.setPhone(!request.getPhone().isEmpty() ?
                request.getPhone() : user.getPhone());
        user.setFullName(!request.getFullName().isEmpty() ?
                request.getFullName() : user.getFullName());
        user.setEmail(!request.getEmail().isEmpty() ?
                request.getEmail() : user.getEmail());
        user.setUserName(!request.getUserName().isEmpty() ?
                request.getUserName() : user.getUserName());
        user.setUpdatedAt(new Date());

        if (request.getAvatarPicture() != null) {
            String avatar = uploadService.uploadUserAvt(request.getAvatarPicture(), user.getId());
            user.setAvatarPicture(avatar);
        }

        userRepository.save(user);
        return user;
    }
}