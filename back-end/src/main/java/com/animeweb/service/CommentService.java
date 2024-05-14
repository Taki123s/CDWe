package com.animeweb.service;

import com.animeweb.dto.CommentDTO;

import java.util.List;

public interface CommentService {
    List<CommentDTO> getAllComment(Long idMovie);
    List<CommentDTO>getAll();
}
