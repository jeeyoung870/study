package hello.hellospring.service;

import hello.hellospring.domain.Member;
import hello.hellospring.repository.MemberRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Commit;
import org.springframework.transaction.annotation.Transactional;
import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

@SpringBootTest
@Transactional
// @Transactional 추가해주면 test코드 실행후 commit 전에 rollback해준다.(test의 데이터는 반영 안됨)
class MemberServiceIntegrationTest {

    @Autowired
    MemberService memberService ;
    @Autowired
    MemberRepository memberRepository;

    // Test Class의 기본 : given -> when -> then 주석 달면 가독성up
    @Test
    // @Commit : 이거 붙이면 @Transactional 붙여도 데이터 롤백안됨
    void join() throws Exception {
        // given
        Member member = new Member();
        member.setName("hello");
        // when
        Long saveId = memberService.join(member);
        // then
        Member findMember = memberRepository.findById(saveId).get();
        assertEquals(member.getName(), findMember.getName());
    }

    @Test
    public void duplicateMemberCase() {
        //given
        Member mem1 = new Member();
        mem1.setName("spring");
        Member mem2 = new Member();
        mem2.setName("spring");
        //when
        memberService.join(mem1);
        // assertThrows(예상예외타입, 함수-test할내용)  다른타입예외가 발생하면 test fail함
        IllegalStateException e = assertThrows(IllegalStateException.class, () -> memberService.join(mem2));
        assertThat(e.getMessage()).isEqualTo("이미 존재하는 회원입니다.");
 /*
        try {
            memberService.join(mem2);
            fail();
        } catch (IllegalStateException e){
            assertThat(e.getMessage()).isEqualTo("이미 존재하는 회원입니다.");
        }
        */
        //then
    }

}