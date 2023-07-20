package com.basic.mavenSpringboot3.runner;


import com.basic.mavenSpringboot3.MybootProperties;
import com.basic.mavenSpringboot3.dto.AccountDto;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

// ApplicationRunner : main class에 args 전달 혹은 어플리케이션 시작시 실행할 작업 지정 가능
@Component
public class MyRunner implements ApplicationRunner {

    private Logger logger = LoggerFactory.getLogger(MyRunner.class);


    // [[ 공통properties 설정 방법 1 ]]
    // @Value : xml의 bean property 대신 사용가능 (application.properties의 key와 같은 이름이어야 함.)
    // 유의점 : 대소문자, 공백 구분하므로 이름 확인
    // 외부에서 jar실행시 직접 args 주입하는것이 우선순위가 더 높다.
        // ex) java -jar ./target/MavenSpringboot0720-0.0.1-SNAPSHOT.jar --myboot.name=스프링
//    @Value("${myboot.name}")
//    private String name;
//    @Value("${myboot.age}")
//    private int age;
//    @Value("${myboot.fullName}")
//    private String fullName;

    // [[ 공통properties 설정 방법 2 ]]
    @Autowired
    MybootProperties mybootProperties;      //클래스안에 선언한 변수들 getter로 사용가능

    // [[ prod/test Bean 개별설정 방법 - @Profile사용 ]]
    // ProdConfigurationdp 에 선언한 bean들(이름은 달라도 되지만 return타입이 겹치는 메서드 있을경우 중복에러가 발생한다)
    @Autowired
    private String firstHello;
    @Autowired
    private AccountDto accountDto;

    @Override
    public void run(ApplicationArguments args) throws Exception {

        logger.debug("foo : " + args.containsOption("foo"));
        logger.debug("bar : " + args.containsOption("bar"));
        // Application -> Run Configuration -> Program arguments -> --bar 를 추가한다.
        //-> VM arguments -> -Dfoo 를 추가한다.
        // run 결과 : -Dfoo VM 아규먼트는 무시하고(false), --bar 아규먼트는 처리한다.(true)

//        @Value로 만든 변수 사용할 경우:
//        System.out.println("Boot app name : " + fullName);
//        System.out.println("Random age : " + age);

        logger.info("Logger class name {}", logger.getClass().getName());
        // [[ prod/test properties 개별설정 방법  ]]
        // spring.profiles.active=prod 설정에 의해, application.properties의 값보다 application-prod.properties의 설정값이 우선하므로,
        // myboot.name=jeeyoung's Spring 대신   myboot.name=Mox's Spring  이 출력된다.
        logger.info("Boot app name : " + mybootProperties.getFullName());
        logger.info("Random age : " + mybootProperties.getAge());

        logger.info(firstHello);
        logger.info("계좌: "+accountDto.getAccountId()+" : "+accountDto.getBalance()+"원 | "+accountDto.getType());

    }
}
