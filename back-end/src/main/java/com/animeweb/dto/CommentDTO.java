package com.animeweb.dto;
import com.animeweb.entities.*;
import lombok.*;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CommentDTO {
    private Long id;
    private Integer parentId;
    private String content;
    private Date commentAt;
    private Date updateAt;
    private Date deleteAt;
    private Boolean status;
    private Movie movie;
    private User userComment;
    private User userReply;
    private Chapter chapter;



}
