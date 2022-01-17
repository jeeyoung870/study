package hello.hellospring.aop;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

@Component  //component-scan (빈자동등록)
@Aspect   // aop적용시 필요 어노테이션
public class TimeTraceAop {

    @Around("execution(* hello.hellospring.service..*(..))")    //service 패키지 밑으로 모두 execute 발동
    public Object execute(ProceedingJoinPoint joinPoint) throws Throwable {
        long start = System.currentTimeMillis();
        System.out.println("START : " + joinPoint.toString());  //호출된 메소드 정보 출력
        try {
            return joinPoint.proceed();
        } finally {
            long finish = System.currentTimeMillis();
            long timeMs = finish - start;
            System.out.println("END : " + joinPoint.toString() + " "+ timeMs + "ms");
        }

    }
}
