package com.animeweb.controller.client;

import com.animeweb.dto.payment.ServicePackDTO;
import com.animeweb.dto.payment.UserPackedDTO;
import com.animeweb.entities.ServicePack;
import com.animeweb.entities.UserPacked;
import com.animeweb.mapper.ServicePackMapper;
import com.animeweb.mapper.UserPackedMapper;
import com.animeweb.service.ServicePackService;
import com.animeweb.service.impl.ServicePackServiceImpl;
import com.animeweb.service.impl.UserPackedServiceImpl;
import com.animeweb.service.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/servicePack")
public class ServicePackController {
    @Autowired
    private ServicePackServiceImpl servicePackService;
    @Autowired
    private UserPackedServiceImpl userPackedService;
    @Autowired
    UserServiceImpl userService;
    @GetMapping
    public ResponseEntity<List<ServicePackDTO>> getServiceList() {
        return ResponseEntity.ok(servicePackService.getListServicePack());
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> editServicePack(@PathVariable Long id, @RequestBody ServicePackDTO updatedService) {
        servicePackService.save(id, ServicePackMapper.MaptoEntiy(updatedService));


        return ResponseEntity.ok("Success");
    }

    @PutMapping("/delete/{id}")
    public ResponseEntity<String> updateServicePack(@PathVariable Long id) {

        servicePackService.updateServicePack(id);
        return ResponseEntity.ok("Service Pack updated successfully");
    }

    @PostMapping("/create")
    public ResponseEntity<ServicePackDTO> createServicePack(@RequestBody ServicePackDTO service) {
        List<ServicePackDTO> list = servicePackService.getListServicePack();
        ServicePack servicePack = ServicePackMapper.MaptoEntiy(service);
        Date now = new Date();
        servicePack.setCreateAt(now);
        System.out.println(service.getService_type());

        for (ServicePackDTO s : list) {
            if (s.getService_type().equals(service.getService_type())) {
                return ResponseEntity.ok(null);
            }
        }

        return ResponseEntity.ok(servicePackService.createServicePack(servicePack));
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<UserPackedDTO>> getAll() {
        List<UserPacked> userPackeds = userPackedService.findAllUserPacked();
        List<UserPackedDTO> userPackedDTOS = new ArrayList<>();
        for (UserPacked u : userPackeds
        ) {
            UserPackedDTO userPackedDTO =UserPackedMapper.mapToDTO(u);
            userPackedDTO.setStatus(u.getStatus());
            userPackedDTO.setId(u.getId());
            userPackedDTO.setCreatedAt(u.getCreatedAt());
            userPackedDTOS.add(userPackedDTO);
        }
        return ResponseEntity.ok(userPackedDTOS);
    }
    @GetMapping("/getAll/{idUser}")
    public ResponseEntity<List<UserPackedDTO>> getAllByUser(@PathVariable("idUser") Long idUser) {
        List<UserPacked> userPackeds = userPackedService.findAllUserPackedById(userService.findUserById(idUser));
        List<UserPackedDTO> userPackedDTOS = new ArrayList<>();
        for (UserPacked u : userPackeds) {
            UserPackedDTO userPackedDTO = UserPackedMapper.mapToDTO(u);
            userPackedDTO.setStatus(u.getStatus());
            userPackedDTO.setId(u.getId());
            userPackedDTO.setCreatedAt(u.getCreatedAt());
            userPackedDTOS.add(userPackedDTO);
        }
        return ResponseEntity.ok(userPackedDTOS);
    }
    @PutMapping("/delete/user-packed/{id}")
    public ResponseEntity<String> deleteServicePack(@PathVariable Long id) {

        userPackedService.deleteUserPacked(id);
        return ResponseEntity.ok("Service Pack updated successfully");
    }

}
