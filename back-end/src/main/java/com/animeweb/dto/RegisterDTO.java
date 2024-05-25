package com.animeweb.dto;

import lombok.Data;

@Data
public class RegisterDTO {
    private String userName;
    private String password;
    private String email;
    private String fullName;
    private String phone;

}
