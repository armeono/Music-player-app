package com.example.backendsongapp.Favorites;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FavoriteService {

    private FavoriteRepository favoriteRepository;


    @Autowired
    public FavoriteService(FavoriteRepository favoriteRepository) {
        this.favoriteRepository = favoriteRepository;
    }

    public Integer[] getSongID(Integer id){
        return favoriteRepository.getSongID(id);
    }
}
