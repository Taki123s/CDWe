package com.animeweb.controller;

import com.animeweb.dto.ServicePackDTO;

import com.animeweb.dto.UserPackedDTO;
import com.animeweb.dto.UserServicePackedDTO;
import com.animeweb.entities.UserPacked;
import com.animeweb.service.ServicePackService;
import com.animeweb.service.UserPackedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/servicePack")
public class ServicePackController {
    @Autowired
    private ServicePackService servicePackService;
    @Autowired
    private UserPackedService userPackedService;
    @GetMapping
    public ResponseEntity<List<ServicePackDTO>> getServiceList(){
        return ResponseEntity.ok(servicePackService.getListServicePack());
    }
    @GetMapping("/findAll")
    public ResponseEntity<List<UserServicePackedDTO>>getAllServicePackByUserId(@RequestParam Long userID){
        List<UserServicePackedDTO> list=userPackedService.getServicePackActiveByUserId(userID);
        if(list.isEmpty()){
            list=userPackedService.getServicePackExpiredByUserId(userID);
        }
        return  ResponseEntity.ok(list);
    }
}
