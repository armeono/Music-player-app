package com.example.backendsongapp.Favorites;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@RestController
@RequestMapping("/favorites")
@CrossOrigin(origins = "http://localhost:4200")
public class FavoriteController {

    private FavoriteService favService;


    @Autowired
    public FavoriteController(FavoriteService favService) {
        this.favService = favService;
    }

    @GetMapping("/songID/{id}")
    public Integer[] getSongID(@PathVariable Integer id){

        return favService.getSongID(id);

    }

    @PostMapping("/postSong/{user_id}/{song_id}")
    public void addSong(@PathVariable Integer user_id, @PathVariable Integer song_id){
        favService.addSong(user_id, song_id);
    }

    @DeleteMapping("/deleteSong/{user_id}/{song_id}")
    public void deleteSongFromFavorites(@PathVariable Integer user_id, @PathVariable Integer song_id){

        favService.removeSong(user_id, song_id);

    }


}
