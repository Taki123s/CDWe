package com.animeweb.service;

import com.animeweb.dto.FollowDTO;
import com.animeweb.dto.MovieDTO;
import com.animeweb.entities.Follow;
import com.animeweb.entities.Movie;
import org.springframework.stereotype.Service;

@Service
public interface FollowService {
    public FollowDTO AddFollow(Follow follow);
}
