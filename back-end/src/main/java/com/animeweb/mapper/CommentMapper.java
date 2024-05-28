package com.animeweb.mapper;

import com.animeweb.dto.CommentDTO;
import com.animeweb.dto.MovieDTO;
import com.animeweb.entities.Comment;
import com.animeweb.entities.Movie;

public class CommentMapper {
    public static CommentDTO mapToCommentDTO(Comment comment) {
        return new CommentDTO(
                comment.getId(),
                comment.getParentId(),
                comment.getContent(),
                comment.getCommentAt(),
                comment.getUpdateAt(),
                comment.getDeleteAt(),
                comment.getStatus(),
                comment.getMovieId().getId(),
                comment.getUserComment().getId(),
                comment.getUserReply().getId(),
                comment.getChapter().getId());
    }
}