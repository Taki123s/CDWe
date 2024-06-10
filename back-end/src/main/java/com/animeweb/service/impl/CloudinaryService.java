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
    public static final String SERVICE_SAVE_FOLDER ="/ServicePack/";
    public static final String SERVICE_GET_FOLDER ="ServicePack/";
    @Autowired
    private Cloudinary cloudinary;
    public String uploadChapter(MultipartFile file) throws IOException {
        Map uploadResult = cloudinary.uploader().upload(file.getBytes(),
                ObjectUtils.asMap("resource_type", "video"));
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
    public String uploadServiceAvt(MultipartFile file,Long idMovie) throws IOException {
        String saveUrl = SERVICE_SAVE_FOLDER + "servicePack_" + idMovie + "/avatar";
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
    public String getServiceFolderById(Long idMovie){
        return SERVICE_GET_FOLDER + "servicePack_" + idMovie;
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
}

