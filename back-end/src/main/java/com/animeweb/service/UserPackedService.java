package com.animeweb.service;

import com.animeweb.dto.user.UserServicePackedDTO;
import com.animeweb.entities.User;
import com.animeweb.entities.UserPacked;

import java.util.List;

public interface UserPackedService {
    boolean checkUserBuyedService(User idUser);
    UserPacked getUserPacked(User idUser);

    List<UserPacked>  findAllUserPacked();
    void deleteUserPacked(Long id);
    List<UserServicePackedDTO> getServicePackActiveByUserId(Long userId);
    List<UserServicePackedDTO> getServicePackExpiredByUserId(Long userId);
}
