package com.animeweb.service;

import com.animeweb.entities.User;
import com.animeweb.request.CreateUserRequest;
import com.animeweb.request.UpdateUserRequest;

import java.util.List;

public interface AdminService {

    void createUser(CreateUserRequest request);
    void deleteUser(Long id);
    void updateUser(Long id, UpdateUserRequest request);
    List<User> getAllUsers();
    void deactivateUser(Long id);
    void setRole(Long id, Long roleId);
}