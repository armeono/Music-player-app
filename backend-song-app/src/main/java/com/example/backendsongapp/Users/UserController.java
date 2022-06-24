package com.example.backendsongapp.Users;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    private UserService userService;

    BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/getUsers")
    public List<User> getUsers(){
        return userService.getUsers();
    }

    @PostMapping("/newUser")
    public String addNewUser(@RequestBody User user){

        String encodedPassword = encodePassword(user.getPassword());
        user.setPassword(encodedPassword);

        userService.addUser(user);

        return "User added!";

    }

    public String encodePassword(String password){

        String encodedPassword = encoder.encode(password);

        return encodedPassword;

    }


}
