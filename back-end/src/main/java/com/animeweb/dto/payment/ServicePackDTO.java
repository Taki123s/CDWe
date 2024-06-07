package com.animeweb.dto.payment;
import com.animeweb.entities.*;

import lombok.*;

import java.util.Date;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class ServicePackDTO {
    private Long id;
    private String service_type;
    private Double price;
    private Date createdAt;


}
