package com.example.backendsongapp.Favorites;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface FavoriteRepository extends JpaRepository<Favorites, Integer> {


    @Query(value = "SELECT song_id FROM Favorites WHERE user_id = ?1", nativeQuery = true)
    Integer[] getSongID(Integer ID);


    @Modifying
    @Query(value = "INSERT INTO Favorites(user_id, song_id) VALUES(?1, ?2)", nativeQuery = true)
    void addSong(Integer user_id, Integer song_id);

    @Modifying
    @Query(value = "DELETE FROM Favorites WHERE user_id = ?1 AND song_id = ?2", nativeQuery = true)
    void removeSongFromFavorites(Integer user_id, Integer song_id);

    @Query(value = "SELECT id from Favorites WHERE user_id = ?1 AND song_id = ?2", nativeQuery = true)
    Integer checkIfExists(Integer user_id, Integer song_id);
}
