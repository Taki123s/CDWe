package com.animeweb.mapper;

import com.animeweb.dto.RegisterDTO;
import com.animeweb.dto.UserDTO;
import com.animeweb.entities.User;

public class UserMapper {
    public static UserDTO mapToDto(User user){
        return new UserDTO(user.getId(),
                user.getRoles(),
                user.getUserName(),
                user.getAvatarPicture(),
                user.getPassword(),
                user.getEmail(),
                user.getFullName(),
                user.getPhone(),
                user.getUserType(),
                user.getStatus(),
                user.getExternalId());
    }
    public static User mapToRegisterUser(RegisterDTO userDTO){
        return new User(
                userDTO.getUserName(),
                userDTO.getAvatarPicture(),
                userDTO.getEmail(),
                userDTO.getFullName(),
                userDTO.getPhone(),
                userDTO.getUserType(),
                userDTO.getExternalId());
    }
}
