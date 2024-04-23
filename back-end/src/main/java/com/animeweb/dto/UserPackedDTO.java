package com.animeweb.dto;

import com.animeweb.entity.ServicePack;
import com.animeweb.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.time.LocalDateTime;
@Getter
@Setter
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
