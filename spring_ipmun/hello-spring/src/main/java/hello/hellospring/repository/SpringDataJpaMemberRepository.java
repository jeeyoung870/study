package hello.hellospring.repository;

import hello.hellospring.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

// interface는 다중상속 가능
// JpaRepository 를 상속받고 있으면 스프링 데이터 JPA가 bean을 자동으로 등록해준다.
public interface SpringDataJpaMemberRepository extends JpaRepository<Member, Long>, MemberRepository {

    @Override
    Optional<Member> findByName(String name);
    // findByName (인터페이스 이름 규칙 있음): jpql -> select m from Member m where m.name = ?
    // findByEmail -> jpql -> select m from Member m where m.email = ?
    // ㄴ이렇게 메서드 이름을 이용해 자동으로 쿼리 생성함. -> 스프링 데이터JPA 제공 기능
}
