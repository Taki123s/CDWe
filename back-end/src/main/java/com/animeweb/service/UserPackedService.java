package com.animeweb.service;

import com.animeweb.dto.UserServicePackedDTO;
import com.animeweb.entities.User;
import java.util.List;

public interface UserPackedService {
    boolean checkUserBuyedService(User idUser);
    List<UserServicePackedDTO> getServicePackActiveByUserId(Long userId);
    List<UserServicePackedDTO> getServicePackExpiredByUserId(Long userId);

}
