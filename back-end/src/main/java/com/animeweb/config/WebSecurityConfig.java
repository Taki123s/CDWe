//package com.animeweb.config;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
//import org.springframework.security.web.SecurityFilterChain;
//import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
//import org.springframework.web.cors.CorsConfiguration;
//import org.springframework.web.cors.CorsConfigurationSource;
//import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
//
//import java.util.List;
//
//@Configuration
//@EnableWebSecurity
//public class WebSecurityConfig {
//    @Autowired
//    CustomOAuth2SuccessHandler customOAuth2SuccessHandler;
// @Bean
// public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//
//     http.csrf(AbstractHttpConfigurer::disable)
//             .cors(cors -> cors.configurationSource(corsConfigurationSource())) // Enable CORS configuration
//             .authorizeHttpRequests(authorize -> authorize
//                     .anyRequest().permitAll())
//             .oauth2Login(oauth2 -> oauth2
//                     .successHandler(customOAuth2SuccessHandler) // Use custom success handler
//                     .permitAll());
//
//     return http.build();
// }
//    @Bean
//    public CorsConfigurationSource corsConfigurationSource() {
//        CorsConfiguration configuration = new CorsConfiguration();
//        configuration.addAllowedOrigin("*"); // Cho phép truy cập từ tất cả các nguồn
//        configuration.addAllowedMethod("*"); // Cho phép tất cả các phương thức (GET, POST, PUT, DELETE, v.v.)
//        configuration.addAllowedHeader("*"); // Cho phép tất cả các tiêu đề
//        configuration.setAllowedOrigins(List.of("http://localhost:3000"));
//        configuration.setAllowCredentials(true);
//
//        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//        source.registerCorsConfiguration("/**", configuration);
//        return source;
//    }
//}