package com.animeweb.mapper;

import com.animeweb.dto.SocialUser;
import com.animeweb.entities.User;

public class SocialUserMapper {

    public static SocialUser mapToDTO(User user) {

        return new SocialUser(
                user.getUserName(),
                user.getAvatarPicture(),
                user.getPassword(),
                user.getEmail(),
                user.getFullName(),
                user.getPhone(),
                user.getUserType(),
                user.getCreatedAt(),
                user.getUpdatedAt(),
                user.getDeletedAt(),
                user.getStatus(),
                user.getExternalId(),
                user.getViews(),
                user.getRates(),
                user.getFollows()
        );
    }

    public static User mapToEntity(SocialUser socialUser) {
        return new User( socialUser.getUserName(),
                socialUser.getAvatarPicture(),
                socialUser.getPassword(),
                socialUser.getEmail(),
                socialUser.getFullName(),
                socialUser.getPhone(),
                socialUser.getUserType(),
                socialUser.getCreatedAt(),
                socialUser.getUpdatedAt(),
                socialUser.getDeletedAt(),
                socialUser.getStatus(),
                socialUser.getExternalId(),
                socialUser.getViews(),
                socialUser.getRates(),
                socialUser.getFollows()
        );
    }
}
