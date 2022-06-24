package com.example.backendsongapp.Songs;

import javax.persistence.*;
import java.util.Date;


@Entity
@Table(name="songs")
public class Song {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String song_name;
    private String artist_name;
    private String song_url;
    private Integer rating;
    private Date date_entered;
    private Date date_modified;
    @Transient
    private Category category;
    private String album_name;

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    private String duration;

    public Song(){

    }

    public Song(Integer id, String song_name, String artist_name, String song_url, Integer rating, Date date_entered, Date date_modified, Category category, String album_name, String duration) {
        this.id = id;
        this.song_name = song_name;
        this.artist_name = artist_name;
        this.song_url = song_url;
        this.rating = rating;
        this.date_entered = date_entered;
        this.date_modified = date_modified;
        this.category = category;
        this.album_name = album_name;
        this.duration = duration;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getSong_name() {
        return song_name;
    }

    public void setSong_name(String song_name) {
        this.song_name = song_name;
    }

    public String getArtist_name() {
        return artist_name;
    }

    public void setArtist_name(String artist_name) {
        this.artist_name = artist_name;
    }

    public String getSong_url() {
        return song_url;
    }

    public void setSong_url(String song_url) {
        this.song_url = song_url;
    }

    public Integer getRating() {
        return rating;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }

    public Date getDate_entered() {
        return date_entered;
    }

    public void setDate_entered(Date date_entered) {
        this.date_entered = date_entered;
    }

    public Date getDate_modified() {
        return date_modified;
    }

    public void setDate_modified(Date date_modified) {
        this.date_modified = date_modified;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public String getAlbum_name() {
        return album_name;
    }

    public void setAlbum_name(String album_name) {
        this.album_name = album_name;
    }

    @Override
    public String toString() {
        return "Song{" +
                "id=" + id +
                ", song_name='" + song_name + '\'' +
                ", artist_name='" + artist_name + '\'' +
                ", song_url='" + song_url + '\'' +
                ", rating=" + rating +
                ", date_entered=" + date_entered +
                ", date_modified=" + date_modified +
                ", category=" + category +
                ", album_name='" + album_name + '\'' +
                ", duration='" + duration + '\'' +
                '}';
    }
}
