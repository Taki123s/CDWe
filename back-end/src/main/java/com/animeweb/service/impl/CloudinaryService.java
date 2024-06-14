package com.animeweb.service.impl;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Map;

@Service
public class CloudinaryService {
    public static final String MOVIE_SAVE_FOLDER ="/MovieStorage/";
    public static final String MOVIE_GET_FOLDER ="MovieStorage/";
    @Autowired
    private Cloudinary cloudinary;
    public String uploadChapter(MultipartFile file,Long idMovie,Integer ordinal) throws Exception {
        String saveUrl = MOVIE_SAVE_FOLDER+ "movie_"+idMovie+"/chapter_"+ordinal;
        deleteChapter(idMovie,ordinal);
        Map uploadResult = cloudinary.uploader().upload(file.getBytes(),
                ObjectUtils.asMap("resource_type", "video",
                        "folder",saveUrl
                ));
        return (String) uploadResult.get("url");
    }
    public String uploadMovieAvt(MultipartFile file,Long idMovie) throws IOException {
        String saveUrl = MOVIE_SAVE_FOLDER + "movie_" + idMovie + "/avatar";
        Map uploadResult = cloudinary.uploader().upload(file.getBytes(),
                ObjectUtils.asMap(
                        "resource_type", "image",
                        "folder", saveUrl
                ));
        return (String) uploadResult.get("url");
    }
    public String getMovieFolderById(Long idMovie){
        return MOVIE_GET_FOLDER + "movie_" + idMovie;
    }

    public void deleteFolderMovie(String folderPath) throws Exception {
        Map<String, Object> params = ObjectUtils.asMap(
                "prefix",folderPath+"/",
                "folder", folderPath+"/",
                "type","upload"
        );
        Map result = cloudinary.api().resources(params);
        List<Map> resources = (List<Map>) result.get("resources");
        for (Map resource : resources) {
            String publicId = (String) resource.get("public_id");
            if (resource.get("type").equals("upload")) {
                cloudinary.uploader().destroy(publicId, ObjectUtils.emptyMap());
            }
        }
    }

    public void deleteChapter(Long idMovie, Integer ordinal) throws Exception {
        String folderPath = MOVIE_GET_FOLDER + "movie_" + idMovie+ "/chapter_" + ordinal;
        Map<String, Object> params = ObjectUtils.asMap(
                "prefix",folderPath+"/",
                "folder", folderPath+"/",
                "resource_type","video",
                "type","upload"
        );
        Map result = cloudinary.api().resources(params);
        List<Map> resources = (List<Map>) result.get("resources");
        for (Map resource : resources) {
            String publicId = (String) resource.get("public_id");
                cloudinary.uploader().destroy(publicId, ObjectUtils.asMap("resource_type","video"));
        }
    }
}

