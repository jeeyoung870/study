package com.base.myspring.controller;

import com.base.myspring.dto.UserDto;
import com.base.myspring.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserRestController {
    @Autowired
    private UserService userService;

    @PostMapping
    public Long create(@RequestBody UserDto userDto) {
        return userService.insertUser(userDto);
    }

    @GetMapping("/{email}")
    public UserDto getUser(@PathVariable String email) {
        return userService.selectUserByEmail(email);
    }

    @GetMapping
    public List<UserDto> getUsers() {
        return userService.selectUsers();
    }

    @PutMapping("/{id}")
    public UserDto modifyUser(@PathVariable Long id, @RequestBody UserDto userDto){
        return userService.updateUser(id, userDto);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> removeUser(@PathVariable Long id) {
        return userService.deleteUser(id);
    }

}
