package com.animeweb.enums;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class InitPermission {
   public static final Map<String, List<String>> ROLE_PERMISSIONS = new HashMap<>();
   static{
       List<String> movieManagerPer = new ArrayList<>();
       movieManagerPer.add("view_movies");
       movieManagerPer.add("add_movie");
       movieManagerPer.add("edit_movie");
       movieManagerPer.add("delete_movie");

       movieManagerPer.add("view_chapters");
       movieManagerPer.add("add_chapter");
       movieManagerPer.add("edit_chapter");
       movieManagerPer.add("delete_chapter");

       movieManagerPer.add("view_genres");
       movieManagerPer.add("add_genre");
       movieManagerPer.add("edit_genre");
       movieManagerPer.add("delete_genre");

       movieManagerPer.add("view_series");
       movieManagerPer.add("add_series");
       movieManagerPer.add("edit_series");
       movieManagerPer.add("delete_series");

       List<String> serviceManagerPer = new ArrayList<>();
       serviceManagerPer.add("view_services");
       serviceManagerPer.add("add_services");
       serviceManagerPer.add("edit_services");
       serviceManagerPer.add("delete_services");

       List<String> userManagerPer = new ArrayList<>();
       userManagerPer.add("view_users");
       userManagerPer.add("add_user");
       userManagerPer.add("edit_user");
       userManagerPer.add("delete_user");

       ROLE_PERMISSIONS.put(Role.MOVIE_MANAGER.name(),movieManagerPer);
       ROLE_PERMISSIONS.put(Role.SERVICES_MANGER.name(),serviceManagerPer);
       ROLE_PERMISSIONS.put(Role.USER_MANAGER.name(),userManagerPer);
   }
}
