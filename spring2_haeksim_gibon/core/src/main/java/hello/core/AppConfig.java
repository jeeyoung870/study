package hello.core;

import hello.core.discount.DiscountPolicy;
import hello.core.discount.RateDiscountPolicy;
import hello.core.member.MemberRepository;
import hello.core.member.MemberService;
import hello.core.member.MemberServiceImpl;
import hello.core.member.MemoryMemberRepository;
import hello.core.order.OrderService;
import hello.core.order.OrderServiceImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

// 어떤 클래스를 의존할 것인지 등 환경설정하는 클래스
// 애플리케이션의 실제 동작에 필요한 구현 객체를 생성한다.
// DI 를 해주는 클래스
@Configuration
public class AppConfig {

    @Bean
    public MemberService memberService() {
        // 생성자 주입
        return new MemberServiceImpl(getMemberRepository());
    }
    // new memberRepository() 드래그후 ctrl+alt+M => 메소드로 꺼내주는 리팩토링 가능
    @Bean
    public MemberRepository getMemberRepository() {
        return new MemoryMemberRepository();
    }

    @Bean
    public OrderService orderService() {
        return new OrderServiceImpl(getMemberRepository(), getDiscountPolicy());
    }

    @Bean
    public DiscountPolicy getDiscountPolicy() {
//        return new FixDiscountPolicy();   // 오직 이 부분만 변경해서 할인 정책을 갈아끼울 수 있다.
        return new RateDiscountPolicy();
    }
}
