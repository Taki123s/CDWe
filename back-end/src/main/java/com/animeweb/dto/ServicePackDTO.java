package com.animeweb.dto;

import lombok.*;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ServicePackDTO {
    private int id;
    private String service_type;
    private double price;
    private LocalDateTime createdAt;
}
