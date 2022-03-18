package hello.core;

import hello.core.discount.FixDiscountPolicy;
import hello.core.member.MemberService;
import hello.core.member.MemberServiceImpl;
import hello.core.member.MemoryMemberRepository;
import hello.core.order.OrderService;
import hello.core.order.OrderServiceImpl;

// 어떤 클래스를 의존할 것인지 등 환경설정하는 클래스
// 애플리케이션의 실제 동작에 필요한 구현 객체를 생성한다.
// DI 를 해주는 클래스
public class AppConfig {

    public MemberService memberService() {
        // 생성자 주입
        return new MemberServiceImpl(new MemoryMemberRepository());
    }

    public OrderService orderService() {
        return new OrderServiceImpl(new MemoryMemberRepository(), new FixDiscountPolicy());
    }
}
