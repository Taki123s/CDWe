package com.animeweb.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ServicePackDTO {
    private int id;
    private String service_type;
    private double price;
    private LocalDateTime createdAt;
}
