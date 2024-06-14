package com.animeweb.controller.admin;

import com.animeweb.dto.oauth.RoleDTO;
import com.animeweb.enums.Role;
import com.animeweb.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/admin/roles")
public class AdminRoleController {
    @Autowired
    RoleService roleService;
    @GetMapping()
    public ResponseEntity<List<RoleDTO>> getAllRole(){
        return new ResponseEntity<>(roleService.getAllRole(), HttpStatus.OK);
    }
}
