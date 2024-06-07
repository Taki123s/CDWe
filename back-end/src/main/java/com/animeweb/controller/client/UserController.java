package com.animeweb.controller.client;

import com.animeweb.dto.user.UserDTOBuilder;
import com.animeweb.entities.*;
import com.animeweb.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;
import java.util.stream.Collectors;

@Controller
@RequestMapping("/account")
public class UserController {
    @Autowired
    private UserRepository userRepository;
    @GetMapping("/view/{id}")
    public ResponseEntity<UserDTOBuilder>viewProfile(@PathVariable Long id){
        User user=userRepository.findById(id).orElseThrow(()->new RuntimeException("User not found"));

        List<Long> roleIDList = user.getRoles().stream()
                .map(Role::getId)
                .collect(Collectors.toList());
        List<Long> viewIdList = user.getViews().stream()
                .map(View::getId)
                .collect(Collectors.toList());
        List<Long> rateIDList = user.getRates().stream()
                .map(Rate::getId)
                .collect(Collectors.toList());
        List<Long> followIdList = user.getFollows().stream()
                .map(Follow::getId)
                .collect(Collectors.toList());
        UserDTOBuilder userDTO=new UserDTOBuilder(user.getId(),roleIDList,user.getUserName(),user.getAvatarPicture()
        ,"",user.getEmail(),user.getFullName(),user.getPhone(),user.getUserType(),user.getCreatedAt(),user.getUpdatedAt()
        ,user.getDeletedAt(),user.getStatus(),user.getExternalId(),viewIdList,rateIDList,followIdList);

               return new ResponseEntity<>(userDTO, HttpStatus.OK);
    }
}