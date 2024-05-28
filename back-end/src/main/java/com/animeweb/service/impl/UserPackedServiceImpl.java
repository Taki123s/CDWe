package com.animeweb.service.impl;

import com.animeweb.entities.UserPacked;
import com.animeweb.repository.UserPackedRepository;
import com.animeweb.service.UserPackedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserPackedServiceImpl implements UserPackedService {
    @Autowired
    UserPackedRepository userPackedRepository;
    public void save(UserPacked userPacked){
        userPackedRepository.save(userPacked);
    }
}
