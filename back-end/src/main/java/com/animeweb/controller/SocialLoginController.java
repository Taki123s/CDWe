package com.animeweb.controller;

import com.animeweb.config.HashAlgorithm;
import com.animeweb.dto.SocialUser;
import com.animeweb.entities.Role;
import com.animeweb.entities.User;
import com.animeweb.mapper.SocialUserMapper;
import com.animeweb.service.impl.AccountOAuth2UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


import java.security.NoSuchAlgorithmException;
import java.time.LocalDate;
import java.util.Date;
import java.util.Map;

@RestController
public class SocialLoginController {
    @Autowired
    AccountOAuth2UserService accountOAuth2UserService;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/login/google")
    public ResponseEntity<SocialUser> getUser(@AuthenticationPrincipal OAuth2User oAuth2User) throws NoSuchAlgorithmException {
        String email = (String) oAuth2User.getAttribute("email");
        String name = (String) oAuth2User.getAttribute("name");
        String givenName = (String) oAuth2User.getAttribute("given_name");
        String id = (String) oAuth2User.getAttribute("sub");
        String pictureUrl = (String) oAuth2User.getAttribute("picture");
        User socialUser = accountOAuth2UserService.findByEmailGoogle(email);
        System.out.println(oAuth2User.getAttributes());
        SocialUser socialUser1 =null;

        Date now = java.sql.Date.valueOf(LocalDate.now());
        if (socialUser == null) {
            System.out.println(name);
            String pass= HashAlgorithm.hashText(id,HashAlgorithm.SHA256);
            socialUser1 = new SocialUser(null, name, pictureUrl, pass, email, name, null, 2, now, null, null, true, id, null, null, null);
            accountOAuth2UserService.createAccount(socialUser1);  return ResponseEntity.ok(socialUser1);
        }else{
            return ResponseEntity.ok( SocialUserMapper.mapToDTO(socialUser));
        }

    }
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/login/facebook")
    public Map<String, Object> getUserFacebook(@AuthenticationPrincipal OAuth2User oAuth2User) {
        String email = (String) oAuth2User.getAttribute("email");
        String name = (String) oAuth2User.getAttribute("name");
        String id = (String) oAuth2User.getAttribute("id");
        Map<String, Map<String, Object>> pictureData = oAuth2User.getAttribute("picture");
        String pictureUrl = null;
        if (pictureData != null) {
            Map<String, Object> data = pictureData.get("data");
            if (data != null) {
                pictureUrl = (String) data.get("url");
            }
        }
        User socialUser = accountOAuth2UserService.findByEmailFacebook(email);
        Date now = java.sql.Date.valueOf(LocalDate.now());
        if (socialUser == null) {
            System.out.println(name);
            SocialUser socialUser1 = new SocialUser(null, name, pictureUrl, null, email, name, null, 3, now, null, null, true, id, null, null, null);
            accountOAuth2UserService.createAccount(socialUser1);
        }
        return oAuth2User.getAttributes();
    }


}