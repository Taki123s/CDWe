package com.animeweb.dto;
import com.animeweb.entities.*;
import lombok.*;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CommentDTO {
    private Long id;
    private Integer parentId;
    private String content;
    private Date commentAt;
    private Date updateAt;
    private Date deleteAt;
    private Boolean status;
    private Long movieId;
    private Long userCommentId;
    private Long userReplyId;
    private Long chapterId;
}
