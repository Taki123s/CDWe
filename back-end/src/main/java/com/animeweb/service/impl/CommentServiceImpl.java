package com.animeweb.service.impl;

import com.animeweb.dto.CommentDTO;
import com.animeweb.entities.Comment;
import com.animeweb.mapper.CommentMapper;
import com.animeweb.repository.CommentRepository;
import com.animeweb.repository.GenreRepository;
import com.animeweb.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class CommentServiceImpl implements CommentService {
@Autowired
    private CommentRepository commentRepository;
    @Override
    public List<CommentDTO> getAllComment(Long idMovie) {
        List<Comment> listComment=commentRepository.findCommentsByMovieId(idMovie);
        List<CommentDTO>commentDTOList=new ArrayList<>();
        for (Comment comment:listComment) {
            commentDTOList.add(CommentMapper.mapToCommentDTO(comment));
        }
        return commentDTOList;
    }

    @Override
    public List<CommentDTO> getAll() {
        List<Comment> listComment=commentRepository.findAll();;
        List<CommentDTO>commentDTOList=new ArrayList<>();
        for (Comment comment:listComment) {
            commentDTOList.add(CommentMapper.mapToCommentDTO(comment));
        }
        return commentDTOList;
    }
}
