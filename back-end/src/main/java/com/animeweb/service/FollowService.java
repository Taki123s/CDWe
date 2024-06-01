package com.animeweb.service;

import com.animeweb.dto.FollowDTO;
import com.animeweb.dto.MovieDTO;
import com.animeweb.entities.Follow;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface FollowService {
    FollowDTO addFollow(Follow follow);

    FollowDTO updateFollow(Follow follow);

    FollowDTO findFollowByIdUserAndIdMovie(Long movieId, Long userId);

}