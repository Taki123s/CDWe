package com.animeweb.controller;
import com.animeweb.dto.CommentDTO;
import com.animeweb.entities.Chapter;
import com.animeweb.entities.Comment;
import com.animeweb.entities.Movie;
import com.animeweb.entities.User;
import com.animeweb.repository.MovieRepository;
import com.animeweb.repository.UserRepository;
import com.animeweb.repository.ChapterRepository;
import com.animeweb.service.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;
@RestController
@RequestMapping("/comment")
@RequiredArgsConstructor
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
    @PostMapping("/create")
    public ResponseEntity<CommentDTO> newComment(@RequestBody CommentDTO commentDTO){

        Optional<User> userReply = userRepository.findById(commentDTO.getUserReplyId());


        User userComment = userRepository.findById(commentDTO.getUserCommentId())
                .orElseThrow(() -> new RuntimeException("userComment not found"));
        Chapter chapter= chapterRepository.findById(commentDTO.getChapterId())
                .orElseThrow(()-> new RuntimeException("Chapter not found"));
        Movie movie = movieRepository.findById(commentDTO.getMovieId())
                .orElseThrow(() -> new RuntimeException("Movie not found"));
        CommentDTO comment = commentService.createComment(new Comment(commentDTO.getId(),commentDTO.getParentId(),commentDTO.getContent(),commentDTO.getCommentAt()
                ,commentDTO.getUpdateAt(),commentDTO.getDeleteAt(),commentDTO.getStatus(),movie,userComment,userReply.get()==null?null:userReply.get(),chapter));
        return new ResponseEntity<>(comment, HttpStatus.CREATED);

    }
    @PostMapping("/remove")
    public ResponseEntity<CommentDTO> removeComment(@RequestBody Long id) throws Exception {
        System.out.println(id);
       CommentDTO comment=  commentService.deleteComment(id);
        return new ResponseEntity<>(comment, HttpStatus.NO_CONTENT);

    }
}
