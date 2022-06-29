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


}
