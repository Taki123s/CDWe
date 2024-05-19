package com.animeweb.dto;

import lombok.*;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class PermissionDTO{
    private Long id ;
    private String name;
    private String description;
}