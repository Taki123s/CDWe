package com.animeweb.service;

import com.animeweb.dto.oauth.RoleDTO;

import java.util.List;

public interface RoleService {
    RoleDTO createRole(RoleDTO roleDTO);
    List<RoleDTO> getAllRole();
    RoleDTO findRoleById(Long roleId);
}
