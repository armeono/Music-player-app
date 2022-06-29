package com.example.backendsongapp.Songs;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SongService {

    private SongRepository songRepository;


    @Autowired
    public SongService(SongRepository songRepository) {
        this.songRepository = songRepository;
    }

    public List<Song> getSongs(){
        return songRepository.findAll();
    }

    public Optional<Song> getOneSong(Integer id) { return songRepository.findById(id);}


}
