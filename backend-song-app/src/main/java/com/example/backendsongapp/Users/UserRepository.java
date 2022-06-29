package com.example.backendsongapp.Users;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Integer> {

    @Query(value = "SELECT id, username, password FROM Users WHERE username = ?1", nativeQuery = true)
    User[] getUserByUsername(String username);


    @Query(value = "SELECT id FROM Users WHERE username = ?1", nativeQuery = true)
    Integer getUserID(String username);


}
