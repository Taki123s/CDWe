package com.animeweb.controller;

import com.animeweb.dto.CommentDTO;
import com.animeweb.dto.FollowDTO;
import com.animeweb.entities.Follow;
import com.animeweb.entities.Movie;
import com.animeweb.entities.User;
import com.animeweb.repository.CommentRepository;
import com.animeweb.repository.MovieRepository;
import com.animeweb.repository.UserRepository;
import com.animeweb.service.FollowService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/follow")
public class FollowController {
    @Autowired
    private FollowService followService;
    @Autowired

    private UserRepository userRepository;
    @Autowired

    private MovieRepository movieRepository;
    @PostMapping("/save")

    public ResponseEntity<FollowDTO> followMovie( @RequestBody FollowDTO follow) {
        User user = userRepository.findById(follow.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found"));
        Movie movie = movieRepository.findById(follow.getMovieId())
                .orElseThrow(() -> new RuntimeException("Movie not found"));


        FollowDTO  isFollow = followService.AddFollow(new Follow(follow.getId(),follow.getFollowAt(),follow.getStatus(),user,movie));
        return new ResponseEntity<>(isFollow, HttpStatus.CREATED);

    }
}
