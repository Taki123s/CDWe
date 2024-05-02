package com.animeweb.dto;
import com.animeweb.entity.Chapter;
import com.animeweb.entity.User;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CommentDTO {
    private int id;
    private int parentId;
    private String content;
    private LocalDateTime commentAt;
    private LocalDateTime updateAt;
    private LocalDateTime deleteAt;
    private int status;
    private User userComment;
    private User userReply;
    private Chapter chapter;


}
