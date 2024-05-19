package com.animeweb.dto;


import com.animeweb.entities.Permission;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class RoleDTO {
    private Long id ;
    private String name;
    private String description;
    private List<Permission> permissions = new ArrayList<>();
}
