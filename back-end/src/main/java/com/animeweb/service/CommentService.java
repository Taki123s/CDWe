package com.animeweb.service;

import com.animeweb.dto.CommentDTO;
import com.animeweb.dto.FollowDTO;
import com.animeweb.entities.Comment;
import com.animeweb.entities.Follow;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface CommentService {
    List<CommentDTO> getAllComment(Long idMovie);
    List<CommentDTO>getAll();
    CommentDTO createComment(Comment comment);
     CommentDTO deleteComment(Long id) throws Exception;

}

