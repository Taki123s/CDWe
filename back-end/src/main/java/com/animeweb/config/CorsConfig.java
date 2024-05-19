package com.animeweb.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {
    /*
     allowedOrigins("*") cho phép tất cả các domain gửi yêu cầu,
     allowedMethods chỉ định các phương thức HTTP được chấp nhận,
     allowedHeaders cho phép tất cả các header
     và allowCredentials(true) cho phép sử dụng cookie trong yêu cầu.
     */
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry
                .addMapping("/**")
                .allowedOrigins("*")
                .allowedOrigins("http://localhost:3000")

                .allowedMethods("GET", "POST", "PUT", "DELETE")
                .allowedHeaders("Origin", "X-Requested-With", "Content-Type", "Access-Control-Allow-Origin", "Accept")
                .allowCredentials(true);
    }
}
