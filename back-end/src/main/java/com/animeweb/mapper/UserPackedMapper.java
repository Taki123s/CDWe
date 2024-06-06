package com.animeweb.mapper;

import com.animeweb.dto.payment.UserPackedDTO;
import com.animeweb.dto.UserPackedDTO;
import com.animeweb.dto.UserServicePackedDTO;
import com.animeweb.entities.ServicePack;
import com.animeweb.entities.UserPacked;

import java.util.Date;

public class UserPackedMapper {
    public static UserPackedDTO mapToDTO(UserPacked userPacked){
        return new UserPackedDTO(userPacked.getUserId(),userPacked.getServicePackId(),userPacked.getExpiredTime());

    }
    public static  UserPacked mapToEntity(UserPackedDTO userPackedDTO){
        return new UserPacked(userPackedDTO.getUserId(),userPackedDTO.getServicePackId(),userPackedDTO.getExpiredTime());
    }

    public static  UserServicePackedDTO mapToEntity(UserPacked userPacked){
        return new UserServicePackedDTO(userPacked.getId(),userPacked.getUserId().getId(),userPacked.getServicePackId(),userPacked.getExpiredTime(),userPacked.getCreatedAt(),userPacked.getStatus());
    }
}
