package com.animeweb.controller;

import com.animeweb.dto.RoleDTO;
import com.animeweb.service.RoleService;
import com.animeweb.service.impl.RoleServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth/role")
public class RoleController {
    @Autowired
    private RoleService roleService;
    @GetMapping("/{roleId}")
     public ResponseEntity<RoleDTO> findRoleById(@PathVariable Long roleId){
        return ResponseEntity.ok(roleService.findRoleById(roleId));
    }
}
