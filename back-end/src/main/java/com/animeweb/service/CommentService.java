package com.animeweb.service;

import com.animeweb.dto.CommentDTO;
import com.animeweb.entities.Comment;

import java.util.List;

public interface CommentService {
    List<CommentDTO> getAllComment(Long idMovie);
    List<CommentDTO>getAll();

    CommentDTO deleteComment(Long id) throws Exception;

    CommentDTO createComment(Comment comment);
}
