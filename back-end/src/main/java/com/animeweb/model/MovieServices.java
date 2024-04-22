package com.animeweb.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class MovieServices {
    @Autowired
    private MovieRepository productRepository;
    // Phương thức để lấy danh sách các phim có lượt xem cao nhất trong ngày
    public List<movies> getTopViewMoviesDay() {
        return productRepository.findTopViewMoviesDay();
    }

    // Phương thức để lấy danh sách các phim có lượt xem cao nhất trong tháng
    public List<movies> getTopViewMoviesMonth() {
        return productRepository.findTopViewMoviesMonth();
    }

    // Phương thức để lấy danh sách các phim có lượt xem cao nhất trong năm
    public List<movies> getTopViewMoviesYear() {
        return productRepository.findTopViewMoviesYear();
    }

    public List<movies> getAllProducts() {
        return productRepository.findAll();
    }
    public List<movies> all(){
        return  productRepository.findAllMovies();
    }
    public movies getProductById(Long id) {
        return productRepository.findById(id).orElse(null);
    }

    public movies saveProduct(movies product) {
        return productRepository.save(product);
    }

    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }
}
