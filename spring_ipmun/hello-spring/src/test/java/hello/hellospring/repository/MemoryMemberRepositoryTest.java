package hello.hellospring.repository;

import hello.hellospring.domain.Member;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.*;

public class MemoryMemberRepositoryTest {

    MemoryMemberRepository repo = new MemoryMemberRepository();

    //AfterEach : test 하나가 끝날때마다 수행 ((여기서는 저장된 member데이터를 clear시켜줌
    // clear 안시켜줄시, member 데이터가 누적 저장되어 test error 발생.
    @AfterEach
    public void afterEach(){
        repo.clearStore();
    }

    @Test
    public void save(){
        Member member = new Member();
        member.setName("jy870");

        repo.save(member);

        Member result = repo.findById(member.getId()).get();
        // System.out.println("result = "+ (result == member));

        // assertEquals(예상값, 실제값) : 같지 않으면 test fail 되며 에러가 난다.
        // Assertions.assertEquals(member, result);

        // assertj의 Assertions
        assertThat(member).isEqualTo(result);
    }

    @Test
    public void findByName(){
        Member member1 = new Member();
        member1.setName("jy870");
        repo.save(member1);
        // 변수명 위에서 shift+F6 -> 변수명 rename
        Member member2 = new Member();
        member2.setName("jyjy");
        repo.save(member2);

        Member result = repo.findByName(member1.getName()).get();
        assertThat(result).isEqualTo(member1);
    }

    @Test
    public void findAll(){
        Member member1 = new Member();
        member1.setName("jy870");
        repo.save(member1);
        Member member2 = new Member();
        member2.setName("jyjy");
        repo.save(member2);

        List<Member> result = repo.findAll();
        assertThat(result.size()).isEqualTo(2);

    }
}
