package hello.hellospring.repository;

import hello.hellospring.domain.Member;

import javax.persistence.EntityManager;
import java.util.List;
import java.util.Optional;

public class JpaMemberRepository implements MemberRepository{

    private final EntityManager em;

    public JpaMemberRepository(EntityManager em) {
        this.em = em;
    }


    @Override
    public Member save(Member member) {
        em.persist(member);
        // setId()까지 member에 담아줌
        return member;
    }

    @Override
    public Optional<Member> findById(Long id) {
        // find : 컬럼이 pk일경우 해당 엔티티 객체를 찾아줌
        Member member = em.find(Member.class, id);
        return Optional.ofNullable(member);
    }

    @Override
    public Optional<Member> findByName(String name) {
        // createQuery() : pk외의 컬럼으로 조회할 때 jpql 사용(엔티티 객체 자체를 select한다.)
        // 주의!! : 쿼리문 from절의 Member는 테이블명이 아닌 자바 클래스 이름으로 기입한다.(대소문자 주의)
        List<Member> result = em.createQuery("select m from Member m where m.name = :name", Member.class)
                .setParameter("name", name)
                .getResultList();
        return result.stream().findAny();
    }

    @Override
    public List<Member> findAll() {
        // sql문의 전체(*)는 엔티티 객체 자체(m)로 조회한다.
        return em.createQuery("Select m from member m", Member.class)
                .getResultList();
    }
}
