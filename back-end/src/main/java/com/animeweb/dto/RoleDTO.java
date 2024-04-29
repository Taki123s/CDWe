package com.animeweb.dto;

import com.animeweb.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class RoleDTO {
    private int id ;
    private String description;
    private Set<User> users;
}
