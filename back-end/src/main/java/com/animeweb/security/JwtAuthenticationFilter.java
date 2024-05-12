//package com.animeweb.security;
//
//import com.animeweb.service.impl.UserServiceImpl;
//import jakarta.servlet.FilterChain;
//import jakarta.servlet.ServletException;
//import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.HttpServletResponse;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
//import org.springframework.util.StringUtils;
//import org.springframework.web.filter.OncePerRequestFilter;
//
//import java.io.IOException;
//
//public class JwtAuthenticationFilter extends OncePerRequestFilter {
////    @Autowired
////    public JwtGenerator jwtGenerator;
////    @Autowired
////    UserServiceImpl userService;
////    @Override
////    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
////        String token = getJWTFromRequest(request);
////        if(StringUtils.hasText(token)&& jwtGenerator.validateToken(token)){
////            System.out.println("valid");
////            String userName = jwtGenerator.getUserNameFromJWT(token);
////            UserDetails userDetails = userService.loadUserByUsername(userName);
////            UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(userDetails,userDetails.getAuthorities());
////            authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
////            SecurityContextHolder.getContext().setAuthentication(authenticationToken);
////        }
////        filterChain.doFilter(request,response);
////    }
////    public String getJWTFromRequest(HttpServletRequest request){
////        String bearerToken = request.getHeader("Authorization");
////
////        if(StringUtils.hasText(bearerToken)&&bearerToken.startsWith("Bearer ")){
////            return bearerToken.substring(7,bearerToken.length());
////        }else {
////            return null;
////        }
////    }
//}
