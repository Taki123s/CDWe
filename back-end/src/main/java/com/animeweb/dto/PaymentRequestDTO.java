package com.animeweb.dto;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PaymentRequestDTO {
    private Double amount;
    private String currency;
    private String method;
    private String intent;
    private String description;
}
