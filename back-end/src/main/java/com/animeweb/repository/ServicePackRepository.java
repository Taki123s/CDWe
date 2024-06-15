package com.animeweb.repository;

import com.animeweb.entities.ServicePack;
import com.animeweb.entities.UserPacked;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ServicePackRepository extends JpaRepository<ServicePack,Long> {
    @Query("select s from ServicePack s where s.status=true")
    List<ServicePack> findAll();

    @Query("SELECT s FROM ServicePack s WHERE s.id = :id and s.status=true")
    ServicePack findServicePackById(Long id);

    @Query("select count(s)>0 from ServicePack s where s.service_type=:type and s.status=true")
    Boolean existByType(String type);

    @Query(value = "SELECT sp.id,sp.create_at,sp.delete_at,sp.price,sp.service_type,sp.status,sp.update_at,sp.service_img  FROM users_packed up JOIN service_packs sp ON up.service_pack_id = sp.id WHERE up.create_at >= DATE_SUB(CURRENT_DATE(),INTERVAL 1 MONTH) and sp.status=1 GROUP BY sp.service_type ORDER BY COUNT(up.service_pack_id) DESC LIMIT 1;", nativeQuery = true)
    ServicePack getUserPackedBoughtMostByMonth();

    @Query(value = "SELECT sp.id,sp.create_at,sp.delete_at,sp.price,sp.service_type,sp.status,sp.update_at,sp.service_img  FROM users_packed up JOIN service_packs sp ON up.service_pack_id = sp.id WHERE up.create_at >= DATE_SUB(CURRENT_DATE(),INTERVAL 1 YEAR)and sp.status=1 GROUP BY sp.service_type ORDER BY COUNT(up.service_pack_id) DESC LIMIT 1;", nativeQuery = true)
    ServicePack getUserPackedBoughtMostByYear();

}