package com.basic.mavenSpringboot3.controller;

import com.basic.mavenSpringboot3.entity.User;
import com.basic.mavenSpringboot3.repository.UserRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class UserController {

    @Autowired
    UserRepository userRepository;

    @GetMapping("/leaf")
    public String leaf(Model model) {
        model.addAttribute("name","jeeyoung");
        return "leaf";
    }

    @GetMapping("/index")
    @PreAuthorize("hasAnyAuthority('ROLE_USER', 'ROLE_ADMIN')")
    public String index(Model model) {
        model.addAttribute("users", userRepository.findAll());
        return "index";
    }

    @GetMapping("/signup")
    @PreAuthorize("hasAnyAuthority('ROLE_USER', 'ROLE_ADMIN')")
    public String showSignUpForm(User myuser) {
        return "add-user";
    }
    // BindingResult : @Valid(엔터티의 @NotBlank와 대응) 인자에 대한 검증결과 담은 객체.

    @PostMapping("/adduser")
    @PreAuthorize("hasAnyAuthority('ROLE_USER', 'ROLE_ADMIN')")
    public String addUser(@Valid User myuser, BindingResult result, Model model) {
        if (result.hasErrors()) {
            return "add-user";
        }
        userRepository.save(myuser);
        model.addAttribute("users", userRepository.findAll());
        return "index";
    }

}
