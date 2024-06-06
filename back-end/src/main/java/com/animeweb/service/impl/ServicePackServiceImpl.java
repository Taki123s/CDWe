package com.animeweb.service.impl;

import com.animeweb.dto.ServicePackDTO;
import com.animeweb.entities.ServicePack;
import com.animeweb.mapper.ServicePackMapper;
import com.animeweb.repository.ServicePackRepository;

import com.animeweb.service.ServicePackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ServicePackServiceImpl implements ServicePackService {
    @Autowired
    private ServicePackRepository servicePackRepository;

    @Override
    public List<ServicePackDTO> getListServicePack() {
        List<ServicePack> servicePacks = servicePackRepository.findAll();
        List<ServicePackDTO> servicePackDTOS = new ArrayList<>();
        for (ServicePack servicePack : servicePacks) {
            servicePackDTOS.add(ServicePackMapper.MaptoDto(servicePack));
        }
        return servicePackDTOS;
    }

    @Override
    public ServicePackDTO getById(long id) {
        ServicePack servicePack = servicePackRepository.findById(id).get();
        return ServicePackMapper.MaptoDto(servicePack);
    }
}
