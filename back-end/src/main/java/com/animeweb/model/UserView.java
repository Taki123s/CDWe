package com.animeweb.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;


import java.util.Date;

@Entity
@Table(name = "user_views")
public class UserView {

    @jakarta.persistence.Id
    @Id

    private int id;

    @Column(name = "idAccount")
    private int accountId;

    @Column(name = "idMovie")
    private int movieId;

    @Column(name = "watchAt")
    private Date watchAt;

    // Constructors, Getters, and Setters

    public UserView() {
    }

    public UserView(int accountId, int movieId, Date watchAt) {
        this.accountId = accountId;
        this.movieId = movieId;
        this.watchAt = watchAt;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getAccountId() {
        return accountId;
    }

    public void setAccountId(int accountId) {
        this.accountId = accountId;
    }

    public int getMovieId() {
        return movieId;
    }

    public void setMovieId(int movieId) {
        this.movieId = movieId;
    }

    public Date getWatchAt() {
        return watchAt;
    }

    public void setWatchAt(Date watchAt) {
        this.watchAt = watchAt;
    }}



