package com.animeweb.controller;

import com.animeweb.dto.CommentDTO;
import com.animeweb.dto.FollowDTO;
import com.animeweb.entities.Follow;
import com.animeweb.service.FollowService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/follow")
public class FollowController {
    @Autowired
    private FollowService followService;
    @PostMapping("/save")

    public ResponseEntity<FollowDTO> followMovie( @RequestBody Follow follow) {
        FollowDTO  isFollow = followService.AddFollow(follow);
        return new ResponseEntity<>(isFollow, HttpStatus.CREATED);

    }
}
