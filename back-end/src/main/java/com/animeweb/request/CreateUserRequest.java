package com.animeweb.request;

public record CreateUserRequest(
        String name,
        String phone,
        String email,
        String username,
        String password,
        String avatarPicture
) {
}
