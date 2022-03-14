package hello.core.discount;

import hello.core.member.Member;

public interface DiscountPolicy {

    // shift+alt+enter = 에러 자동수정 단축키 

    /**
     * 
     * @param member
     * @param price
     * @return 할인 대상 금액
     */
    int discount(Member member, int price);
}
