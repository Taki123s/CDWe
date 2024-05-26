package com.animeweb.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
@Builder
@AllArgsConstructor
public class UserDTOBuilder {
    private Long id;
    private List<Long> roleIdList;
    private String userName;
    private String avatarPicture;
    private String password;
    private String email;
    private String fullName;
    private String phone;
    private Integer userType;
    private Date createdAt;
    private Date updatedAt;
    private Date deletedAt;
    private Boolean status;
    private String externalId;
    private List<Long> viewIdList;
    private List<Long> rateIdList;
    private List<Long> followIdList;
}