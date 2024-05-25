package com.animeweb.service;

import com.animeweb.dto.FollowDTO;
import com.animeweb.entities.Follow;
import org.springframework.stereotype.Service;

@Service
public interface FollowService {
    public FollowDTO addFollow(Follow follow);

    public FollowDTO updateFollow(Follow follow) ;

}
