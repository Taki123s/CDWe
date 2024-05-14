package com.animeweb.service.impl;

import com.animeweb.dto.FollowDTO;
import com.animeweb.entities.Follow;
import com.animeweb.entities.Movie;
import com.animeweb.entities.User;
import com.animeweb.repository.FollowRepository;
import com.animeweb.repository.MovieRepository;
import com.animeweb.service.FollowService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class FollowServiceImpl implements FollowService {
    @Autowired
    private FollowRepository followRepository;

    @Override
    public FollowDTO AddFollow(Follow follow) {
        Follow f = null;
        if (follow != null) {
            f = this.followRepository.save(follow);
        }
        FollowDTO followDTO = FollowDTO.builder()
                .id(f.getId())
                .followAt(f.getFollowAt())
                .userId(f.getUserId().getId())
                .movieId(f.getMovie().getId())
                .build();
        return followDTO;
    }
}
