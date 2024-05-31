package com.animeweb.service.impl;

import com.animeweb.entities.User;
import com.animeweb.entities.UserPacked;
import com.animeweb.repository.UserPackedRepository;
import com.animeweb.service.UserPackedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Date;

@Service
public class UserPackedServiceImpl implements UserPackedService {
    @Autowired
    UserPackedRepository userPackedRepository;

    public void save(UserPacked userPacked) {
        userPackedRepository.save(userPacked);
    }

    @Override
    public boolean checkUserBuyedService(User idUser) {
        UserPacked isBuyed = userPackedRepository.checkUserBuyedService(idUser);
        if (isBuyed == null) {
            return false;
        } else {
            Date now = new Date();
            if (isBuyed.getExpiredTime().compareTo(now)>0){
                return true;
            }else{
                return false;
            }
        }
    }
}
