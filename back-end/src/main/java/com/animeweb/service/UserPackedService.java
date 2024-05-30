package com.animeweb.service;

import com.animeweb.dto.SocialUser;
import com.animeweb.dto.UserPackedDTO;
import com.animeweb.entities.User;
import com.animeweb.entities.UserPacked;

public interface UserPackedService {
    boolean checkUserBuyedService(User idUser);

}
