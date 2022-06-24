package com.example.backendsongapp.Songs;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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


}
