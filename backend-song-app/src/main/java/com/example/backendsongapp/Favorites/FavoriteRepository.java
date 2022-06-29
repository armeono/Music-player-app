package com.example.backendsongapp.Favorites;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface FavoriteRepository extends JpaRepository<Favorites, Integer> {


    @Query(value = "SELECT song_id FROM Favorites WHERE user_id = ?1", nativeQuery = true)
    Integer[] getSongID(Integer ID);
}
