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
    @Query("select u from ServicePack s join UserPacked u on s.id=u.servicePackId.id where u.status=true and  u.userId.id= :userID and u.expiredTime = (SELECT max (u.expiredTime) FROM UserPacked u )")
    List<UserPacked> GetAllServicePackBoughtActive(@Param("userID") Long userID);
    @Query("select u from ServicePack s join UserPacked u on s.id=u.servicePackId.id where u.status=false and u.userId.id= :userID and u.expiredTime = (SELECT max (u.expiredTime) FROM UserPacked u )")
    List<UserPacked> GetAllServicePackBoughtExpired(@Param("userID") Long userID);

}
