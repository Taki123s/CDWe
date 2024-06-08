package com.animeweb.repository;

import com.animeweb.entities.ServicePack;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ServicePackRepository extends JpaRepository<ServicePack,Long> {
    @Query("select s from ServicePack s where s.status=true")
    List<ServicePack> findAll();

    @Query("SELECT s FROM ServicePack s WHERE s.id = :id and s.status=true")
    ServicePack findServicePackById(Long id);
}