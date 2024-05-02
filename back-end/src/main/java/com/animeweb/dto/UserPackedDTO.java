package com.animeweb.dto;

import com.animeweb.entity.ServicePack;
import com.animeweb.entity.User;
import lombok.*;

import java.time.LocalDateTime;
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserPackedDTO {
    private int id;
    private User userId;
    private ServicePack servicePackId;
    private LocalDateTime expiredTime;

    private LocalDateTime createdAt;
    private boolean status;
    private LocalDateTime deletedAt;
}
