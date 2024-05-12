package com.animeweb.mapper;

import com.animeweb.dto.SocialUser;
import com.animeweb.entities.User;


public class SocialUserMapper {
    public static SocialUser mapToDTO(User account) {
        return new SocialUser(
                account.getUserName(), account.getFullName(), account.getPassword(), account.getEmail(), account.getAvatarPicture(), account.getExternalId(), account.getCreatedAt(), account.getUserType()
        );
    }

    public static User mapToAccount(SocialUser socialUser) {
        return new User(socialUser.getAccountName(), socialUser.getFullName(), socialUser.getPassword(), socialUser.getEmail(), socialUser.getImage(), socialUser.getIdOther(), socialUser.getCreate_at(), socialUser.getType());
    }
}
