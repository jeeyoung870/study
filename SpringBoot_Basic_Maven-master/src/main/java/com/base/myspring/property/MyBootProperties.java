package com.base.myspring.property;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties("myboot")
@Data
public class MyBootProperties {
    private String name;
    private int age;
    private String fullName;
}
