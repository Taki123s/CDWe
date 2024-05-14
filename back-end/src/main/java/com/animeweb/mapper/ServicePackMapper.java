package com.animeweb.mapper;

import com.animeweb.dto.MovieDTO;
import com.animeweb.dto.ServicePackDTO;
import com.animeweb.entities.*;

public class ServicePackMapper {
    public static ServicePackDTO MaptoDto(ServicePack servicePack){
return new ServicePackDTO(servicePack.getId(), servicePack.getService_type(),servicePack.getPrice(),
        servicePack.getCreateAt());
    }

}
