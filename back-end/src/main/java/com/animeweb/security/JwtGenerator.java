package com.animeweb.security;

import com.animeweb.entities.User;
import com.nimbusds.jose.*;
import com.nimbusds.jose.crypto.MACSigner;
import com.nimbusds.jose.crypto.MACVerifier;
import com.nimbusds.jwt.JWTClaimsSet;
import io.jsonwebtoken.*;
import org.springframework.security.authentication.AuthenticationCredentialsNotFoundException;
import org.springframework.stereotype.Component;

import java.text.ParseException;
import java.util.Date;

@Component
public class JwtGenerator {
    public String generateToken(User user) {
        JWSHeader header = new JWSHeader(JWSAlgorithm.HS256);
        Date currentDate = new Date();
        Date expireDate = new Date(currentDate.getTime()+SecurityConstants.JWT_EXPIRATION);
        JWTClaimsSet jwtClaimsSet = new JWTClaimsSet.Builder()
                .subject(user.getUserName())
                .issuer("animeweb.site")
                .issueTime(currentDate)
                .expirationTime(expireDate)
                .claim("id",user.getId())
                .claim("role",user.getRoleDetails()).build();
        Payload payload = new Payload(jwtClaimsSet.toJSONObject());
        JWSObject jwsObject = new JWSObject(header,payload);
        try{
            jwsObject.sign(new MACSigner(SecurityConstants.JWT_SECRET.getBytes()));
            return jwsObject.serialize();
        }catch (JOSEException e){
            throw new RuntimeException(e);
        }
    }
    public String getUserNameFromJWT(String token){
        Claims claims = Jwts.parser()
                .setSigningKey(SecurityConstants.JWT_SECRET)
                .parseClaimsJws(token)
                .getBody();
        return claims.getSubject();
    }
    public boolean validateToken(String token) {
        try {
            JWSObject jwsObject = JWSObject.parse(token);
            JWSVerifier verifier = new MACVerifier(SecurityConstants.JWT_SECRET.getBytes());
            if (jwsObject.verify(verifier)) {
                return true;
            } else {
                throw new AuthenticationCredentialsNotFoundException("Invalid JWT token");
            }
        } catch (ParseException | JOSEException e) {
            throw new AuthenticationCredentialsNotFoundException("Invalid JWT token", e);
        } catch (ExpiredJwtException e) {
            throw new AuthenticationCredentialsNotFoundException("JWT expired", e);
        }
    }

}
