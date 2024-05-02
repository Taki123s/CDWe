package com.animeweb.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "comments")
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "parent_id")
    private int parentId;
    @Column(name = "content")
    private String content;
    @Column(name = "comment_at",columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime commentAt;
    @Column(name = "update_at")
    private LocalDateTime updateAt;
    @Column(name = "delete_at")
    private LocalDateTime deleteAt;
    @Column(name="status",columnDefinition = "int default 1")
    private int status;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="user_comment")
    @JsonBackReference
    private User userComment;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="user_reply")
    @JsonBackReference
    private User userReply;
    @ManyToOne
    @JoinColumn(name ="chapter_id",nullable = false,referencedColumnName = "id")
    @JsonBackReference
    private Chapter chapter;


}
