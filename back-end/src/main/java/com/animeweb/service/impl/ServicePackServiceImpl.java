package com.animeweb.service.impl;

import com.animeweb.dto.payment.ServicePackDTO;
import com.animeweb.entities.ServicePack;
import com.animeweb.mapper.ServicePackMapper;
import com.animeweb.repository.ServicePackRepository;

import com.animeweb.service.ServicePackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
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
        ServicePack servicePack = servicePackRepository.findServicePackById(id);
        return ServicePackMapper.MaptoDto(servicePack);
    }

    @Override
    public void save(long id, ServicePack servicePack) {
        ServicePack pack = servicePackRepository.findServicePackById(id);
        Date now = new Date();
        if (pack != null) {
            servicePack.setUpdateAt(now);
            servicePackRepository.save(servicePack);

        }else{
            return;
        }
    }

    @Override
    public ServicePackDTO createServicePack(ServicePack servicePack) {
        ServicePack pack =   servicePackRepository.save(servicePack);

        return ServicePackMapper.MaptoDto(pack);
    }

    @Override
    public void updateServicePack(Long id) {
            Date now = new Date();
        ServicePack pack =    servicePackRepository.findServicePackById(id);
        if(pack!= null){
            pack.setDeleteAt(now);
            pack.setStatus(false);
            servicePackRepository.save(pack);
        }

    }

}
