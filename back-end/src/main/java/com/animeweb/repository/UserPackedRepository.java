package com.animeweb.repository;


import com.animeweb.entities.User;
import com.animeweb.entities.UserPacked;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UserPackedRepository extends JpaRepository<UserPacked,Long> {
    @Query("select u from UserPacked u where u.userId = :userId and u.status = true")
    UserPacked checkUserBuyedService(User userId);
    @Query("select u from UserPacked u ")
    List<UserPacked> findAllUserPacked();
    @Query("select u from UserPacked u where u.userId = :userId ")
    List<UserPacked> findAllUserPackedByUserId(User userId);
}
