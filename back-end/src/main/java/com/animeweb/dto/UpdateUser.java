package com.animeweb.dto;

import com.animeweb.entities.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UpdateUser {
    private Long id;
    private String userName;
    private String avatarPicture;
    private String email;
    private String fullName;
    private String phone;
}
