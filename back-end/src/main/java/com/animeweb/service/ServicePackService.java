package com.animeweb.service;

import com.animeweb.dto.ServicePackDTO;
import com.animeweb.entities.ServicePack;

import java.util.List;

public interface ServicePackService {
    List<ServicePackDTO> getListServicePack();
    ServicePackDTO getById(long id);
    void save(long id,ServicePack servicePack);
    ServicePackDTO createServicePack(ServicePack servicePack);
    void updateServicePack(Long id);
}
