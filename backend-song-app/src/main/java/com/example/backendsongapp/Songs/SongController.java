package com.example.backendsongapp.Songs;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/songs")
@CrossOrigin(origins = "http://localhost:4200")
public class SongController {

    private SongService songService;

    @Autowired
    public SongController(SongService songService) {
        this.songService = songService;
    }

    @GetMapping("/test")
    public String testConnection(){
        return "Connection working!";
    }



    @GetMapping("/getSongs")
    public List<Song> getSongs(){

        List<Song> songs = songService.getSongs();

        return songs;
    }

    @GetMapping("/getOneSong/{id}")
    public Optional<Song> getSong(@PathVariable Integer id){
        return songService.getOneSong(id);
    }


}
