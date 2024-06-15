package com.animeweb.security;


import com.animeweb.config.CustomOAuth2SuccessHandler;
import com.animeweb.service.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationConverter;
import org.springframework.security.oauth2.server.resource.authentication.JwtGrantedAuthoritiesConverter;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig {
    @Autowired
    UserServiceImpl userService;
    @Autowired
    CustomOAuth2SuccessHandler customOAuth2SuccessHandler;
    @Autowired
    JwtAuthEntryPoint authEntryPoint;
    @Autowired
    CustomJwtDecoder jwtDecoder;
    private final String[] PUBLIC_ENDPOINTS ={"/account/view/**", "/auth/login","/auth/register","/auth/introspect","/genres","/movie/**","/topView", "/static/imgs","/servicePack","/comment/**"};
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.authorizeHttpRequests(request->
//                request.requestMatchers(HttpMethod.POST,PUBLIC_ENDPOINTS).permitAll()
//                        .requestMatchers(HttpMethod.GET,PUBLIC_ENDPOINTS).permitAll().anyRequest().authenticated());
                request.requestMatchers(HttpMethod.POST,"/**").permitAll()

                        .requestMatchers(HttpMethod.GET,"/**").permitAll().anyRequest().authenticated());
        http.oauth2ResourceServer(oauth2->oauth2.jwt(jwtConfigurer -> jwtConfigurer.decoder(jwtDecoder)
                .jwtAuthenticationConverter(jwtAuthenticationConverter())));
        http.csrf(AbstractHttpConfigurer::disable)
                .cors(cors -> cors.configurationSource(corsConfigurationSource())) ;
        http.oauth2Login(oauth2 -> oauth2
                .successHandler(customOAuth2SuccessHandler).permitAll());
        return http.build();
    }
    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.addAllowedOrigin("*"); // Cho phép truy cập từ tất cả các nguồn
        configuration.addAllowedMethod("*"); // Cho phép tất cả các phương thức (GET, POST, PUT, DELETE, v.v.)
        configuration.addAllowedHeader("*"); // Cho phép tất cả các tiêu đề
        configuration.setAllowedOrigins(List.of("http://localhost:3000"));
        configuration.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
    @Bean
    JwtAuthenticationConverter jwtAuthenticationConverter(){
        JwtGrantedAuthoritiesConverter jwtGrantedAuthoritiesConverter = new JwtGrantedAuthoritiesConverter();
        jwtGrantedAuthoritiesConverter.setAuthorityPrefix("");
        JwtAuthenticationConverter jwtAuthenticationConverter = new JwtAuthenticationConverter();
        jwtAuthenticationConverter.setJwtGrantedAuthoritiesConverter(jwtGrantedAuthoritiesConverter);
        return jwtAuthenticationConverter;
    }
    @Bean
    PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }
}
