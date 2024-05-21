package com.animeweb.service;

import com.animeweb.dto.CommentDTO;
import com.animeweb.entities.Comment;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface CommentService {
    List<CommentDTO> getAllComment(Long idMovie);
    List<CommentDTO>getAll();
    CommentDTO createComment(Comment comment);
}
