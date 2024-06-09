package com.animeweb.request;

public record UpdateUserRequest(
        String name,
        String phone,
        String email,
        String avatarPicture,
        String username,
        String password
        ) {
    public UpdateUserRequest {

    }
}
