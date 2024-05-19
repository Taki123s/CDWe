package com.animeweb.dto;

import com.nimbusds.jose.JWSAlgorithm;
import lombok.Data;

@Data
public class AuthResponseDTO {
    private String accessToken;
    private String tokenType ="Bearer ";
    private boolean authenticated = false;

    public AuthResponseDTO(String accessToken,boolean authenticated) {
        this.accessToken = accessToken;
        this.authenticated = authenticated;
    }

}
