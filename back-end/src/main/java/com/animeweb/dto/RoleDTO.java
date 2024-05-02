package com.animeweb.dto;

import com.animeweb.entities.User;
import lombok.*;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class RoleDTO {
    private int id ;
    private String description;
    private List<User> users;
}
