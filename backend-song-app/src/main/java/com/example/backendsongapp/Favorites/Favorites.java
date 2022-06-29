package com.example.backendsongapp.Favorites;


import javax.persistence.*;

@Entity
@Table(name = "favorites")
public class Favorites {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer user_id;
    private Integer song_id;

    public Favorites() {
    }

    public Favorites(Integer id, Integer user_id, Integer song_id) {
        this.id = id;
        this.user_id = user_id;
        this.song_id = song_id;
    }


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getUser_id() {
        return user_id;
    }

    public void setUser_id(Integer user_id) {
        this.user_id = user_id;
    }

    public Integer getSong_id() {
        return song_id;
    }

    public void setSong_id(Integer song_id) {
        this.song_id = song_id;
    }

    @Override
    public String toString() {
        return "Favorites{" +
                "id=" + id +
                ", user_id=" + user_id +
                ", song_id=" + song_id +
                '}';
    }
}


