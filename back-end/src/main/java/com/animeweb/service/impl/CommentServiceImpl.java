package com.animeweb.service.impl;
import com.animeweb.dto.*;
import com.animeweb.entities.Comment;
import com.animeweb.mapper.*;
import com.animeweb.repository.*;
import com.animeweb.service.*;
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

    @Override
    public CommentDTO createComment(Comment comment) {
        Comment commentResult = null;
        if (comment != null) {
            commentResult = this.commentRepository.save(comment);
        }
        CommentDTO commentDTO = CommentDTO.builder()
                .id(commentResult.getId())
                .parentId(commentResult.getParentId())
                .commentAt(commentResult.getCommentAt())
                .commentAt(commentResult.getCommentAt())
                .updateAt(commentResult.getUpdateAt())
                .deleteAt(commentResult.getDeleteAt())
                .status(commentResult.getStatus())
                .movieId(commentResult.getMovieId().getId())
                .userCommentId(commentResult.getUserComment().getId())
                .userReplyId(commentResult.getUserReply().getId())
                .chapterId(commentResult.getChapter().getId())
                .build();
        return commentDTO;
    }
}
