package com.animeweb.controller;

import com.animeweb.dto.SerieDTO;
import com.animeweb.dto.ServicePackDTO;
import com.animeweb.service.ServicePackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/servicePack")
public class ServicePackController {
    @Autowired
    private ServicePackService servicePackService;
    @GetMapping
    public ResponseEntity<List<ServicePackDTO>> getServiceList(){
        return ResponseEntity.ok(servicePackService.getListServicePack());
    }
}
