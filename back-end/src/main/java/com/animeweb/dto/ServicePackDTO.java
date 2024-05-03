package com.animeweb.dto;

import lombok.*;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ServicePackDTO {
    private Long id;
    private String service_type;
    private Double price;
    private LocalDateTime createdAt;
}
