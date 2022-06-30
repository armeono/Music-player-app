package com.example.backendsongapp.Songs;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface SongRepository extends JpaRepository<Song, Integer> {

    @Modifying
    @Query(value = "DELETE FROM Songs WHERE id = ?1", nativeQuery = true)
    void DeleteSong(Integer song_id);
}
