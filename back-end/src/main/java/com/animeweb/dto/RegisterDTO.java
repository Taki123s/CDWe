package com.animeweb.dto;

import lombok.Data;

@Data
public class RegisterDTO {
    private String userName;
    private String avatarPicture;
    private String password;
    private String email;
    private String fullName;
    private String phone;
    private Integer userType = 1;
    private String externalId;

}
