package com.basic.mavenSpringboot3.controller;

import com.basic.mavenSpringboot3.entity.User;
import com.basic.mavenSpringboot3.exception.ResourceNotFoundException;
import com.basic.mavenSpringboot3.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController     // @Controller + @ResponseBody
@RequiredArgsConstructor    // final 붙은 변수들을 생성자 인자로 자동 만들어줌. injection방식으로 생성자 선언 불필요
@RequestMapping("/users")   // @PostMapping에서 공통으로 쓰는 요청 한번에 설정
@EnableGlobalMethodSecurity(prePostEnabled = true)  // @PreAuthorize 사용을 위한 설정. 클래스마다 중복설정 못함!
public class UserRestController {

    private final UserRepository userRepository;

//    // Constructor Injection
//    public UserController(UserRepository userRepository) {
//        this.userRepository = userRepository;
//    }

    @GetMapping("/welcome")
    public String welcome() {
        return "Welcome this endpoint is not secure";
    }
    @PostMapping
    public User create( @RequestBody User user) {   //user 추가
        return userRepository.save(user);
    }

    @GetMapping(value = "/{id}")
//    @PreAuthorize("hasAuthority('ROLE_USER')")
    @PreAuthorize("hasAnyAuthority('ROLE_USER', 'ROLE_ADMIN')")
    public User getUser(@PathVariable Long id) {
        return userRepository.findById(id)  // Optional<User>
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", id));    // 사용자정의 exception class
    }
    // postman에서 http://localhost:8081/users/email/spring 요청해보기
    @GetMapping("/email/{myemail}") // {myemail}과 @PathVariable 변수명과 같아야 함. 다르면 @PathVariable("myemail") 로 설정해야함
    public ResponseEntity<?> getUserByEmail(@PathVariable String myemail) {
        Optional<User> userOptional = userRepository.findByEmail(myemail);
        if(userOptional.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("email : "+myemail+" | This Email isn't exist!!");
        }
        User existUser = userOptional.get();
        return ResponseEntity.ok(existUser);
    }
    @GetMapping("/name/{myname}") // {myemail}과 @PathVariable 변수명과 같아야 함. 다르면 @PathVariable("myemail") 로 설정해야함
    public ResponseEntity<?> getUserByName(@PathVariable("myname") String name) {
        List<User> userList = userRepository.findByName(name);
        if(userList.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("name : "+name+" | This Name isn't exist!!");
        }
        return ResponseEntity.ok(userList);
    }
    @GetMapping
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
//    @PreAuthorize("hasAuthority('ADMIN')")
    public List<User> getUsers() {
        return userRepository.findAll();
    }
    @PutMapping("/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody User userDetail) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", id));
        user.setName(userDetail.getName());
        user.setEmail(userDetail.getEmail());
        User updatedUser = userRepository.save(user);
        return updatedUser;
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", id));
        userRepository.delete(user);
        //return ResponseEntity.ok(user);
        return ResponseEntity.ok().build();
    }


}
