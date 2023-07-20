package com.basic.mavenSpringboot3.runner;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.DatabaseMetaData;

@Order(1)        // MyRunner 클래스보다 먼저 실행.
@Component
@Slf4j
public class DatabaseRunner implements ApplicationRunner {
    @Autowired
    DataSource dataSource;
    @Override
    public void run(ApplicationArguments args) throws Exception {

        // @Slf4j선언후 log객체 사용가능
        log.info("Database 구현 객체이름 : {}", dataSource.getClass().getName());

        try(Connection connection = dataSource.getConnection()){
            DatabaseMetaData metaData = connection.getMetaData();
            log.info(metaData.getDatabaseProductName());
            log.info(metaData.getURL());
            log.info(metaData.getUserName());
        }
    }
}
