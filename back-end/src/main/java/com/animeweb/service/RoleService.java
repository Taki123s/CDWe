package com.animeweb.service;

import com.animeweb.dto.RoleDTO;

import java.util.List;

public interface RoleService {
    RoleDTO createRole(RoleDTO roleDTO);
    List<RoleDTO> getAllRole();
    RoleDTO findRoleById(Long roleId);
}
