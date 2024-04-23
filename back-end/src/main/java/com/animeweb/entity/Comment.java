package com.animeweb.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
@Getter
@Setter
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
    private User userComment;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="user_reply")
    private User userReply;
    @ManyToOne
    @JoinColumn(name ="chapter_id",nullable = false,referencedColumnName = "id")
    private Chapter chapter;


}
