package com.animeweb.service;

import com.animeweb.dto.movie.FollowDTO;
import com.animeweb.entities.Follow;
import org.springframework.stereotype.Service;

@Service
public interface FollowService {
    public FollowDTO addFollow(Follow follow);

    public FollowDTO updateFollow(Follow follow) ;
    FollowDTO findFollowByIdUserAndIdMovie(Long movieId,Long userId);

}