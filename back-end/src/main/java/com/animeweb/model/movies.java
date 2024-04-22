package com.animeweb.model;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import org.springframework.data.annotation.Id;

import java.time.LocalDateTime;

@Entity
public class movies {

    @jakarta.persistence.Id
    @Id

    private int id;

    @Column(nullable = false)
    private String name;

    @Column
    private Integer currentEpisode;

    @Column
    private Integer totalEpisode;

    @Column(length = 1000)
    private String descriptionVN;

    @Column(length = 1000)
    private String descriptionEN;

    @Column
    private int views;

    @Column
    private int typeID;

    @Column
    private double price;







    @Column
    private int status;

    public void setId(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer  getCurrentEpisode() {
        return currentEpisode;
    }

    public void setCurrentEpisode(Integer  currentEpisode) {
        this.currentEpisode = currentEpisode;
    }

    public Integer  getTotalEpisode() {
        return totalEpisode;
    }

    public void setTotalEpisode(Integer  totalEpisode) {
        this.totalEpisode = totalEpisode;
    }

    public String getDescriptionVN() {
        return descriptionVN;
    }

    public void setDescriptionVN(String descriptionVN) {
        this.descriptionVN = descriptionVN;
    }

    public String getDescriptionEN() {
        return descriptionEN;
    }

    public void setDescriptionEN(String descriptionEN) {
        this.descriptionEN = descriptionEN;
    }

    public int getViews() {
        return views;
    }

    public void setViews(int views) {
        this.views = views;
    }

    public int getTypeID() {
        return typeID;
    }

    public void setTypeID(int typeID) {
        this.typeID = typeID;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }





    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "Movie{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", currentEpisode=" + currentEpisode +
                ", totalEpisode=" + totalEpisode +
                ", descriptionVN='" + descriptionVN + '\'' +
                ", descriptionEN='" + descriptionEN + '\'' +
                ", views=" + views +
                ", typeID=" + typeID +
                ", price=" + price +
                ", status=" + status +
                '}';
    }
    // Constructors, getters, and setters
}
