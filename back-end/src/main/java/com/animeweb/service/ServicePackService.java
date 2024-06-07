package com.animeweb.service;

import com.animeweb.dto.payment.ServicePackDTO;

import java.util.List;

public interface ServicePackService {
    List<ServicePackDTO> getListServicePack();
    ServicePackDTO getById(long id);
}
