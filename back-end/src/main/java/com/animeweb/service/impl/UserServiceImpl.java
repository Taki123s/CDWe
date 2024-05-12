package com.animeweb.service.impl;

import com.animeweb.dto.LoginDTO;
import com.animeweb.entities.Role;
import com.animeweb.entities.User;
import com.animeweb.repository.UserRepository;
import com.animeweb.security.IntrospectRequest;
import com.animeweb.security.IntrospectResponse;
import com.animeweb.security.JwtGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private JwtGenerator jwtGenerator;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUserName(username).orElseThrow(()->new UsernameNotFoundException("User not found"));
        return new org.springframework.security.core.userdetails.User(user.getUserName(),user.getPassword(),mapRolesToAuthorities(user.getRoles()));
    }
    private Collection<GrantedAuthority> mapRolesToAuthorities(List<Role> roles){
        return roles.stream().map(role -> new SimpleGrantedAuthority(role.getName())).collect(Collectors.toList());
    }

    public boolean existUserName(String userName){
        return userRepository.existsByUserName(userName);
    }
    public void saveUser(User user){
        userRepository.save(user);
    }
    public IntrospectResponse introspect(IntrospectRequest introspectRequest){
        String token = introspectRequest.getToken();
        boolean verified = jwtGenerator.validateToken(token);
        return new IntrospectResponse(verified);
    }
    public String authenticate(LoginDTO loginDTO){
        User user = userRepository.findByUserName(loginDTO.getUserName()).orElseThrow(()-> new RuntimeException("User not exits"));
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder(10);
        boolean authenticated = passwordEncoder.matches(loginDTO.getPassword(),user.getPassword());
        if(!authenticated) throw new RuntimeException("Unauthenticated");
        return jwtGenerator.generateToken(user);
    }

}
