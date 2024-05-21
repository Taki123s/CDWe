package com.animeweb.controller;
import com.animeweb.dto.CommentDTO;
import com.animeweb.dto.FollowDTO;
import com.animeweb.entities.*;
import com.animeweb.repository.ChapterRepository;
import com.animeweb.repository.MovieRepository;
import com.animeweb.repository.UserRepository;
import com.animeweb.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/comment")
public class CommentController {
    @Autowired
    private CommentService commentService;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ChapterRepository chapterRepository;
    @Autowired
    private MovieRepository movieRepository;
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
        List<CommentDTO> commentDto = commentService.getAllComment(movieId);
        if (commentDto != null && !commentDto.isEmpty()) {
            return new ResponseEntity<>(commentDto, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @PostMapping("/create")
    public ResponseEntity<CommentDTO> newComment(@RequestBody CommentDTO commentDTO){

        User userReply = userRepository.findById(commentDTO.getUserReplyId())
                .orElseThrow(() -> new RuntimeException("userReply not found"));
        User userComment = userRepository.findById(commentDTO.getUserReplyId())
                .orElseThrow(() -> new RuntimeException("userComment not found"));
        Chapter chapter= chapterRepository.findById(commentDTO.getChapterId())
                .orElseThrow(()-> new RuntimeException("Chapter not found"));
        Movie movie = movieRepository.findById(commentDTO.getMovieId())
                .orElseThrow(() -> new RuntimeException("Movie not found"));
        CommentDTO comment = commentService.createComment(new Comment(commentDTO.getId(),commentDTO.getParentId(),commentDTO.getContent(),commentDTO.getCommentAt()
                ,commentDTO.getUpdateAt(),commentDTO.getDeleteAt(),commentDTO.getStatus(),movie,userComment,userReply,chapter));
        return new ResponseEntity<>(comment, HttpStatus.CREATED);

    }
}
