package com.basic.mavenSpringboot3.repository;

import com.basic.mavenSpringboot3.entity.UserInfo;
import org.springframework.data.repository.ListCrudRepository;

import java.util.Optional;

public interface UserInfoRepository extends ListCrudRepository<UserInfo, Integer> {

    Optional<UserInfo> findByEmail(String email);

    Optional<UserInfo> findByName(String username);
}
