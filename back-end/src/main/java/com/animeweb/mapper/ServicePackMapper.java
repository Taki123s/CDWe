package com.animeweb.mapper;

import com.animeweb.dto.payment.ServicePackDTO;
import com.animeweb.entities.*;

public class ServicePackMapper {
    public static ServicePackDTO MaptoDto(ServicePack servicePack){
return new ServicePackDTO(servicePack.getId(), servicePack.getService_type(),servicePack.getPrice(),
        servicePack.getCreateAt(), servicePack.getService_img());
    }

    public static ServicePack MaptoEntiy(ServicePackDTO servicePack){
        return new ServicePack(servicePack.getId(), servicePack.getService_type(), servicePack.getPrice(),servicePack.getCreatedAt());
    }
}
