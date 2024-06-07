package com.animeweb.mapper;

import com.animeweb.dto.payment.UserPackedDTO;
import com.animeweb.entities.UserPacked;

public class UserPackedMapper {
    public static UserPackedDTO mapToDTO(UserPacked userPacked){
        return new UserPackedDTO(userPacked.getUserId(),userPacked.getServicePackId(),userPacked.getExpiredTime());

    }
    public static  UserPacked mapToEntity(UserPackedDTO userPackedDTO){
        return new UserPacked(userPackedDTO.getUserId(),userPackedDTO.getServicePackId(),userPackedDTO.getExpiredTime());
    }
}
