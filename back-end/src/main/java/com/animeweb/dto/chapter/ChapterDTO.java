package com.animeweb.dto.chapter;

import com.animeweb.entities.Movie;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ChapterDTO {
    private Long id;
    private Integer ordinal;
    private String link;
    private Boolean status;
    private Integer type;
    private Movie movie;

}
