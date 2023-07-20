package com.basic.mavenSpringboot3;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

// MyRunner에서 @Value("${myboot.age}")와 같이 가져오는 대신 .properties 파일의 값들을 type-safe 하게 가져다 쓸수 있는 class
// pom.xml에 spring-boot-configuration-processor 의존성 추가해야 사용가능.
// ("myboot") 는 myboot가 prefix인 프로퍼티들을 모두 찾아준다.
@Component
@ConfigurationProperties("myboot")
@Getter @Setter
public class MybootProperties {
    // 변수명은 application.properties 키에서 myboot를 제외한 이름으로 설정한다.
    private String name;
    private int age;
    private String fullName;

}
