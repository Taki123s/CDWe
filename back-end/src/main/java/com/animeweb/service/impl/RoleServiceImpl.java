package com.animeweb.service.impl;

import com.animeweb.dto.oauth.RoleDTO;
import com.animeweb.entities.Role;
import com.animeweb.repository.RoleRepository;
import com.animeweb.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
@Service
public class RoleServiceImpl implements RoleService {
    @Autowired
    RoleRepository roleRepository;
    @Override
    public RoleDTO createRole(RoleDTO roleDTO) {
        return null;
    }

    @Override
    public List<RoleDTO> getAllRole() {
        return null;
    }

    @Override
    public RoleDTO findRoleById(Long roleId) {
        Role role = roleRepository.findById(roleId).orElseThrow(()->new ResponseStatusException(HttpStatus.NOT_FOUND,"Role not exist"));
        return new RoleDTO(role.getId(),role.getName(),role.getDescription(),role.getPermissions());
    }
}
