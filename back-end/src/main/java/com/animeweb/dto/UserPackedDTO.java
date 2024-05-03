package com.animeweb.dto;

import com.animeweb.entities.ServicePack;
import com.animeweb.entities.User;
import lombok.*;

import java.time.LocalDateTime;
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserPackedDTO {
    private Long id;
    private User userId;
    private ServicePack servicePackId;
    private LocalDateTime expiredTime;

    private LocalDateTime createdAt;
    private Boolean status;
    private LocalDateTime deletedAt;
}
