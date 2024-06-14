package com.animeweb.repository;

import com.animeweb.entities.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role,Long> {
   Role findByNameAndStatusTrue(String name);
   @Query("select r from Role r where r.status = true and r.name !='ADMIN'")
   List<Role> getAllRole();
}
