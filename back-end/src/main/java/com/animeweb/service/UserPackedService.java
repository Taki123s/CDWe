package com.animeweb.service;

import com.animeweb.entities.User;

import java.util.List;

public interface UserPackedService {
    boolean checkUserBuyedService(User idUser);
    UserPacked getUserPacked(User idUser);

    List<UserPacked>  findAllUserPacked();
    void deleteUserPacked(Long id);

}
