package com.animeweb.dto.user;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

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
