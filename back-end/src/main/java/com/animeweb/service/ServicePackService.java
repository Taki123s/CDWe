package com.animeweb.service;

import com.animeweb.dto.payment.ServicePackAdmin;
import com.animeweb.dto.payment.ServicePackDTO;

import com.animeweb.entities.ServicePack;

import java.util.List;

public interface ServicePackService {
    List<ServicePackDTO> getListServicePack();
    ServicePackDTO getById(long id);
    void save(long id,ServicePack servicePack);
    ServicePackAdmin createServicePack(ServicePack servicePack);
    void updateServicePack(Long id) throws Exception;
    boolean existType(String serviceType);
    ServicePackDTO getUserPackedBoughtMostByMonth();
    ServicePackDTO getUserPackedBoughtMostByYear();



}
