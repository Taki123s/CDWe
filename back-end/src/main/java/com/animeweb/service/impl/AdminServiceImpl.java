package com.animeweb.service.impl;

import com.animeweb.entities.Role;
import com.animeweb.entities.User;
import com.animeweb.exception.EmailAlreadyExistException;
import com.animeweb.exception.UserNotFoundException;
import com.animeweb.exception.UsernameAlreadyExistException;
import com.animeweb.repository.RoleRepository;
import com.animeweb.repository.UserRepository;
import com.animeweb.request.CreateUserRequest;
import com.animeweb.request.UpdateUserRequest;
import com.animeweb.service.AdminService;
import com.animeweb.service.RoleService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional
public class AdminServiceImpl implements AdminService {

    private final UserRepository userRepository;
    private final RoleService roleService;
    private final RoleRepository roleRepository;

    /**
     * Delete user by id<br/>
     * <strong>This method will delete the user completely, consider when using this method</strong>
     * @param id user id
     */
    @Override
    public void deleteUser(Long id) {
//        userRepository.deleteById(id);
        log.info("Delete user successfully");
    }

    @Override
    public void updateUser(Long id, UpdateUserRequest request) {
        Optional<User> user = userRepository.findById(id);
        if (user.isEmpty())
            throw new RuntimeException("User with the id does not exist");
        else {
            var newUser = user.get();
            newUser.setPhone(request.phone());
            newUser.setUserName(request.username());
            newUser.setFullName(request.name());
            newUser.setEmail(request.email());
            newUser.setUpdatedAt(new Date());
            userRepository.save(newUser);
            log.info("Update user successfully: {}", newUser.getId());
        }
    }


    @Override
    public void createUser(CreateUserRequest request) {
//        Optional<User> newUser = userRepository.findByUserName(request.username());

        log.info("status: {}", userRepository.existsByUserName(request.username()));

        isAccountValid(request.username(), request.email());

        User user = new User();
        user.setUserName(request.username());
        user.setPassword(request.password());
        user.setFullName(request.name());
        user.setPhone(request.phone());
        user.setEmail(request.email());
        user.setStatus(true);
//        user.setCreatedAt(new Date());
        user.setRoles(List.of(roleRepository.findById(2L).orElseThrow()));
        user.setAvatarPicture(request.avatarPicture()); // <-- Default image go here

        userRepository.save(user);
        log.info("Insert user successfully: {}", user.getId());
    }

    @Override
    public List<User> getAllUsers() {
        log.info("Get all users");
        return userRepository.findAll();
    }

    @Override
    public void deactivateUser(Long id) {
        Optional<User> user = userRepository.findById(id);
        if (user.isEmpty())
            throw new UserNotFoundException("User with the id does not exist");
        else {
            var newUser = user.get();
            newUser.setIsActive(!newUser.getIsActive());
            userRepository.save(newUser);
            log.info("Deactivate user successfully: {}", newUser.getId());
        }
    }

    @Override
    public void setRole(Long id, Long roleId) {
        Optional<User> user = userRepository.findById(id);
        if (user.isEmpty())
            throw new UserNotFoundException("User with the id does not exist");
        else {
            var newUser = user.get();
            var role = roleService.findRoleById(roleId);

            Role userRole = new Role();
            userRole.setId(role.getId());
            userRole.setName(role.getName());
            newUser.setRoles(List.of(userRole));

            userRepository.save(newUser);
            log.info("Set role for user successfully: {}", newUser.getId());
        }
    }

    private void isAccountValid(String username, String email) {
        if (userRepository.existsByUserName(username)) {
            throw new UsernameAlreadyExistException("Username already exists");
        }

        if (userRepository.existsByEmail(email)) {
            throw new EmailAlreadyExistException("Email already exists");
        }
    }
}
