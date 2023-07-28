package com.base.myspring.service;

import com.base.myspring.dto.UserDto;
import com.base.myspring.entity.Account;
import com.base.myspring.entity.User;
import com.base.myspring.exception.ResourceNotFoundException;
import com.base.myspring.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final ModelMapper modelMapper;

//    public UserService(UserRepository userRepository) {
//        this.userRepository = userRepository;
//    }

    public Long insertUser(UserDto userDto) {
        User user = new User();
        BeanUtils.copyProperties(userDto, user);
        User savedUser = userRepository.save(user);

        return savedUser.getId();
    }

    @Transactional(readOnly = true)
    public UserDto selectUserByEmail(String email) {
        Optional<User> optionalUser = userRepository.findByEmail(email);
        User existUser = optionalUser.orElseThrow(() -> new ResourceNotFoundException("User","email",email));
        UserDto userDto = new UserDto();
        BeanUtils.copyProperties(existUser, userDto);
        return userDto;
    }

    @Transactional(readOnly = true)
    public List<UserDto> selectUsers() {
        //List<User> => List<UserDto>
        List<User> userRepositoryAll = userRepository.findAll();
        List<UserDto> userDtoList = userRepositoryAll.stream() //Stream<User>
                .map(user -> modelMapper.map(user, UserDto.class))  //Stream<UserDto>
                .collect(Collectors.toList());//List<UserDto>
        return userDtoList;
    }

    public UserDto updateUser(Long id, UserDto userDto) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User", "email", id));
        //setter 메서드를 호출하면 update가 됨
        user.setName(userDto.getName());
        user.setEmail(userDto.getEmail());

        UserDto existUserDto = modelMapper.map(user, UserDto.class);
        return existUserDto;
    }

    public ResponseEntity<?> deleteUser(Long id) {
        Optional<User> optionalUser = userRepository.findById(id);
        //없다면 404 error 발생시킴
        if(!optionalUser.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(id + " User not found");
        }
        User existUser = optionalUser.get();
        userRepository.delete(existUser);
        return ResponseEntity.status(HttpStatus.OK).body(id + " User 삭제됨");
    }
}
