package com.animeweb.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "comments")
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @Column(name = "parent_id")
    private Integer parentId;
    @Column(name = "content")
    private String content;
    @Column(name = "comment_at",columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private Date commentAt = new Date();
    @Column(name = "update_at")
    private Date updateAt;
    @Column(name = "delete_at")
    private Date deleteAt;
    @Column(name="status",columnDefinition = "tinyint default 1")
    private Boolean status = true;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="movie_id")
    @JsonBackReference
    private Movie movieId;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="user_comment")
    @JsonBackReference
    private User userComment;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="user_reply")
    @JsonBackReference
    private User userReply;
    @ManyToOne
    @JoinColumn(name ="chapter_id",nullable=true,referencedColumnName = "id")
    @JsonBackReference
    private Chapter chapter;



}
