package com.example.backendsongapp.Favorites;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class FavoriteService {

    private FavoriteRepository favoriteRepository;


    @Autowired
    public FavoriteService(FavoriteRepository favoriteRepository) {
        this.favoriteRepository = favoriteRepository;
    }

    public Integer[] getSongID(Integer id){
        return favoriteRepository.getSongID(id);
    }

    public void addSong(Integer user_id, Integer song_id){
        if(favoriteRepository.checkIfExists(user_id, song_id) == null) {

            favoriteRepository.addSong(user_id, song_id);

        }

    }

    public void removeSong(Integer user_id, Integer song_id){
        favoriteRepository.removeSongFromFavorites(user_id, song_id);
    }


}
