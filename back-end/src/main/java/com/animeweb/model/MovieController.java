package com.animeweb.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/anime")
public class MovieController {
    @Autowired
    private MovieServices productService;

    @GetMapping("/day")
    public List<movies> findTopViewMoviesDay() {
        return productService.getTopViewMoviesDay();
    }
    @GetMapping("/month")
    public List<movies> findTopViewMoviesMonth() {
        return productService.getTopViewMoviesMonth();
    }
    @GetMapping("/year")
    public List<movies> findTopViewMoviesYear() {
        return productService.getTopViewMoviesYear();
    }

    @GetMapping()
    public List<movies> all() {
        return productService.all();
    }
    @GetMapping("/{id}")
    public movies getProductById(@PathVariable Long id) {
        return productService.getProductById(id);
    }

    @PostMapping
    public movies addProduct(@RequestBody movies product) {
        return productService.saveProduct(product);
    }

    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable Long id) {
        productService.deleteProduct(id);
    }
}
