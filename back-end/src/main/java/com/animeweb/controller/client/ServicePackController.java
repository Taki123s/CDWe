package com.animeweb.controller.client;

import com.animeweb.dto.payment.ServicePackAdmin;
import com.animeweb.dto.payment.ServicePackDTO;
import com.animeweb.dto.payment.UserPackedDTO;
import com.animeweb.entities.ServicePack;
import com.animeweb.entities.UserPacked;
import com.animeweb.mapper.ServicePackMapper;
import com.animeweb.mapper.UserPackedMapper;
import com.animeweb.service.ServicePackService;
import com.animeweb.service.impl.CloudinaryService;
import com.animeweb.service.impl.ServicePackServiceImpl;
import com.animeweb.service.impl.UserPackedServiceImpl;
import com.animeweb.service.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
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
    @Autowired
    CloudinaryService uploadService;

    @GetMapping
    public ResponseEntity<List<ServicePackDTO>> getServiceList() {
        return ResponseEntity.ok(servicePackService.getListServicePack());
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> editServicePack(@PathVariable Long id, @RequestBody ServicePackAdmin updatedService) throws IOException {
        String avatar = uploadService.uploadServiceAvt(updatedService.getFile(), id);
        ServicePack servicePack = ServicePackMapper.mapToEntity(updatedService);
        servicePack.setService_img(avatar);
        servicePack.setUpdateAt(new Date());
        servicePackService.save(id, servicePack);
        System.out.println(avatar);
        return ResponseEntity.ok("Success");
    }

    @PutMapping("/delete/{id}")
    public ResponseEntity<String> updateServicePack(@PathVariable Long id) {

        servicePackService.updateServicePack(id);
        return ResponseEntity.ok("Service Pack updated successfully");
    }

    @PostMapping("/create")
    public ResponseEntity<ServicePackAdmin> createServicePack(@ModelAttribute ServicePackAdmin service) throws IOException {
        ServicePack servicePack = ServicePackMapper.mapToEntity(service);

        if(servicePackService.existType(service.getService_type())) {
            return ResponseEntity.ok(null);
        }
        String avatar = uploadService.uploadServiceAvt(service.getFile(), service.getId());
        servicePack.setService_img(avatar);
        System.out.println(avatar);
        Date now = new Date();
        servicePack.setCreateAt(now);
//        System.out.println(service.getService_type());



        servicePackService.createServicePack(servicePack);

        return ResponseEntity.ok(ServicePackMapper.Maptoadmin(servicePack));
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<UserPackedDTO>> getAll() {
        List<UserPacked> userPackeds = userPackedService.findAllUserPacked();
        List<UserPackedDTO> userPackedDTOS = new ArrayList<>();
        for (UserPacked u : userPackeds
        ) {
            UserPackedDTO userPackedDTO = UserPackedMapper.mapToDTO(u);

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
