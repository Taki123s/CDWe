package com.animeweb.dto;

import com.animeweb.entities.ServicePack;
import com.animeweb.entities.User;
import lombok.*;

import java.util.Date;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserPackedDTO {
    private Long id;
    private User userId;
    private ServicePack servicePackId;
    private Date expiredTime;

    private Date createdAt;
    private Boolean status;
    private Date deletedAt;
}
