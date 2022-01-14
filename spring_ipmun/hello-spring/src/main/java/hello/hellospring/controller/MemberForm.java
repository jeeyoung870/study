package hello.hellospring.controller;

public class MemberForm {
    // html에서 넘어오는 input name="name"이 이 필드에 자동으로 담겨서 들어온다.
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
