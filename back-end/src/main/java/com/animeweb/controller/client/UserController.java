package com.animeweb.controller.client;
import com.animeweb.dto.UpdateUser;
import com.animeweb.dto.user.UserDTOBuilder;
import com.animeweb.entities.*;
import com.animeweb.repository.UserRepository;
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
        ,user.getDeletedAt(),user.getStatus(),user.getExternalId(),user.getIsActive(),viewIdList,rateIDList,followIdList);
        return new ResponseEntity<>(userDTO, HttpStatus.OK);
    }
    @PostMapping("/update")
    public ResponseEntity<User> updateProfile(@RequestBody UpdateUser user){
        Optional<User> existingUser = userRepository.findById(user.getId());
        if (existingUser.isPresent()) {


                User updatedUser = userRepository.save(new User(
                        user.getId(),
                        existingUser.get().getRoles()
                        ,user.getUserName(),
                        user.getAvatarPicture()!=null?user.getAvatarPicture():existingUser.get().getAvatarPicture(),
                        existingUser.get().getPassword()
                        ,user.getEmail(),
                        user.getFullName(),
                        user.getPhone(),
                        existingUser.get().getUserType(),
                        existingUser.get().getCreatedAt(),
                        existingUser.get().getUpdatedAt(),
                        existingUser.get().getDeletedAt()
                        ,existingUser.get().getStatus()
                        ,existingUser.get().getAuthCode()
                        ,existingUser.get().getExpiredAt()
                        ,existingUser.get().getAuthenticated()
                        ,existingUser.get().getExternalId(),
                        existingUser.get().getIsActive()
                        ,existingUser.get().getViews(),
                        existingUser.get().getRates(),
                        existingUser.get().getFollows()));
            return ResponseEntity.ok(updatedUser);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

}