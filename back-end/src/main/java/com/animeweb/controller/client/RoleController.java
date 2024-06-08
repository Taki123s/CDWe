package com.animeweb.controller.client;

import com.animeweb.dto.oauth.RoleDTO;
import com.animeweb.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth/role")
public class RoleController {
    @Autowired
    private RoleService roleService;
    @GetMapping("/{roleId}")
     public ResponseEntity<RoleDTO> findRoleById(@PathVariable Long roleId){
        return ResponseEntity.ok(roleService.findRoleById(roleId));
    }
}
