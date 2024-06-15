package com.animeweb.controller.client;

import com.animeweb.dto.user.UpdateUser;
import com.animeweb.dto.user.UserDTOBuilder;
import com.animeweb.entities.*;
import com.animeweb.repository.UserRepository;
import com.animeweb.service.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Controller
@RequestMapping("/account")
public class UserController {
    @Autowired
    private UserServiceImpl userService;
    @Autowired
    private UserRepository userRepository;

    @GetMapping("/view/{id}")
    public ResponseEntity<UserDTOBuilder> viewProfile(@PathVariable Long id) {
        User user = userService.findUserById(id);
        List<Long> viewIdList = user.getViews().stream()
                .map(View::getId)
                .collect(Collectors.toList());
        List<Long> rateIDList = user.getRates().stream()
                .map(Rate::getId)
                .collect(Collectors.toList());
        List<Long> followIdList = user.getFollows().stream()
                .map(Follow::getId)
                .collect(Collectors.toList());
        UserDTOBuilder userDTO = new UserDTOBuilder(user.getId(), user.getRoles(), user.getUserName(), user.getAvatarPicture()
                , user.getPassword(), user.getEmail(), user.getFullName(), user.getPhone(), user.getUserType(), user.getCreatedAt(), user.getUpdatedAt()
                , user.getDeletedAt(), user.getStatus(), user.getExternalId(), user.getIsActive(), viewIdList, rateIDList, followIdList);
        return new ResponseEntity<>(userDTO, HttpStatus.OK);
    }

    @PostMapping("/update")
    public ResponseEntity<User> updateProfile(@RequestBody UpdateUser user) {
        User existingUser = userService.findUserById(user.getId());
        if (existingUser != null) {


            User updatedUser = userRepository.save(new User(
                    user.getId(),
                    existingUser.getRoles()
                    , user.getUserName(),
                    user.getAvatarPicture() != null ? user.getAvatarPicture() : existingUser.getAvatarPicture(),
                    existingUser.getPassword()
                    , user.getEmail(),
                    user.getFullName(),
                    user.getPhone(),
                    existingUser.getUserType(),
                    existingUser.getCreatedAt(),
                    existingUser.getUpdatedAt(),
                    existingUser.getDeletedAt()
                    , existingUser.getStatus()
                    , existingUser.getAuthCode()
                    , existingUser.getExpiredAt()
                    , existingUser.getAuthenticated()
                    , existingUser.getExternalId(),
                    existingUser.getIsActive()
                    , existingUser.getViews(),
                    existingUser.getRates(),
                    existingUser.getFollows()));
            return ResponseEntity.ok(updatedUser);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

}