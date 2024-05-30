package com.animeweb.repository;


import com.animeweb.entities.User;
import com.animeweb.entities.UserPacked;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserPackedRepository extends JpaRepository<UserPacked,Long> {
    @Query("select u from UserPacked u where u.userId = :userId and u.status = true")
    UserPacked checkUserBuyedService(User userId);
}
