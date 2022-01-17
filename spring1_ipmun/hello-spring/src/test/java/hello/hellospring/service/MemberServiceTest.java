package hello.hellospring.service;

import hello.hellospring.domain.Member;
import hello.hellospring.repository.MemoryMemberRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.*;
import static org.junit.jupiter.api.Assertions.*;

// ctrl+shift+T = java Class파일과 똑같은 위치에 Test 클래스 자동생성 단축키 (method는 public인경우만 test가능함)
class MemberServiceTest {

    MemberService memberService ;
    MemoryMemberRepository memberRepository;

    // test용 독립적인 MemberService 객체 생성
    @BeforeEach
    void setUp() {
        memberRepository = new MemoryMemberRepository();
        memberService = new MemberService(memberRepository);
    }

    @AfterEach
    void tearDown() {
        memberRepository.clearStore();
    }

    // Test Class의 기본 : given -> when -> then 주석 달면 가독성up
    @Test
    void join() {
        // given
        Member member = new Member();
        member.setName("spring");
        // when
        Long saveId = memberService.join(member);
        // then
        Member foundMember = memberService.findOne(saveId).get();
        assertThat(member.getName()).isEqualTo(foundMember.getName());
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

    @Test
    void findMembers() {
    }

    @Test
    void findOne() {
    }
}