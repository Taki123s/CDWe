package com.animeweb.service.impl;

import com.animeweb.dto.oauth.RoleDTO;
import com.animeweb.entities.Role;
import com.animeweb.entities.User;
import com.animeweb.repository.RoleRepository;
import com.animeweb.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
        List<Role> roles = roleRepository.getAllRole();
        List<RoleDTO> roleDTOS = new ArrayList<>();
        RoleDTO roleDTO;
        for(Role role : roles){
            roleDTO = new RoleDTO();
            roleDTO.setId(role.getId());
            roleDTO.setName(role.getName());
            roleDTO.setDescription(role.getDescription());
            roleDTO.setPermissions(role.getPermissions());
            Map<Long,String> userMap = new HashMap<>();
            for(User user : role.getUsers()){
                userMap.put(user.getId(),user.getUserName());
            }
            roleDTO.setUserMap(userMap);
            roleDTOS.add(roleDTO);
        }

        return roleDTOS;
    }

    @Override
    public RoleDTO findRoleById(Long roleId) {
        Role role = roleRepository.findById(roleId).orElseThrow(()->new ResponseStatusException(HttpStatus.NOT_FOUND,"Role not exist"));
        RoleDTO roleDTO = new RoleDTO();
        roleDTO.setId(role.getId());
        roleDTO.setName(role.getName());
        roleDTO.setDescription(role.getDescription());
        roleDTO.setPermissions(role.getPermissions());
        Map<Long,String> userMap = new HashMap<>();
        for(User user : role.getUsers()){
            userMap.put(user.getId(),user.getUserName());
        }
        roleDTO.setUserMap(userMap);
        return roleDTO;
    }
}
