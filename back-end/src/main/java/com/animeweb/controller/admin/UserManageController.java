package com.animeweb.controller.admin;

import com.animeweb.entities.User;
import com.animeweb.repository.RoleRepository;
import com.animeweb.request.CreateUserRequest;
import com.animeweb.request.UpdateUserRequest;
import com.animeweb.security.JwtGenerator;
import com.animeweb.service.AdminService;
import com.nimbusds.jwt.SignedJWT;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.List;

@RestController
@RequestMapping("/admin/user")
@RequiredArgsConstructor
@Slf4j
public class UserManageController {

    private final AdminService adminService;
    private  final RoleRepository roleRepository;
    @Autowired
    JwtGenerator jwtGenerator;
    @GetMapping
    public List<User> getUsers(){

            return adminService.getAllUsers();

    }
    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody CreateUserRequest request) {
        adminService.createUser(request);
        return ResponseEntity.ok().build();
    }

    @PatchMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable("id") Long id,
                                           @RequestBody UpdateUserRequest request) {
        adminService.updateUser(id, request);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<User> delete(@PathVariable Long id) {
        adminService.deleteUser(id);
        return ResponseEntity.ok().build();
    }

    @PatchMapping("/deactivate/{id}")
    public ResponseEntity<User> deactivateUser(@PathVariable Long id) {
        adminService.deactivateUser(id);
        return ResponseEntity.ok().build();
    }

    @PatchMapping("/role/{id}")
    public ResponseEntity<User> setRole(@PathVariable Long id, @RequestBody Long roleId) {
        adminService.setRole(id, roleId);
        return ResponseEntity.ok().build();
    }
}