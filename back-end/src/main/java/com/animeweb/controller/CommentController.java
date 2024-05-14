package com.animeweb.controller;
import com.animeweb.dto.CommentDTO;
import com.animeweb.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/comments")
public class CommentController {
    @Autowired
    private CommentService commentService;
    @GetMapping

    public ResponseEntity<List<CommentDTO>> getAllCommentMovie() {
        List<CommentDTO> commentDto = commentService.getAll();

        if (commentDto != null && !commentDto.isEmpty()) {
            return new ResponseEntity<>(commentDto, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @GetMapping("/{movieId}")
    public ResponseEntity<List<CommentDTO>> getAllCommentMovie(@PathVariable Long movieId) {
        System.out.println(movieId);

        System.out.println("hhhh");
        List<CommentDTO> commentDto = commentService.getAllComment(movieId);
        System.out.println(commentDto);

        if (commentDto != null && !commentDto.isEmpty()) {
            return new ResponseEntity<>(commentDto, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
