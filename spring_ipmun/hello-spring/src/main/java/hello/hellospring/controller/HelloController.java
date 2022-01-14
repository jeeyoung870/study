package hello.hellospring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HelloController {

    @GetMapping("hello")
    public String hello(Model model){
        model.addAttribute("data", "hello!!");
        return "hello";
    }

    @GetMapping("hello-static")
    public String helloStatic(Model model){
        return "../static/hello-static";
    }

    @GetMapping("hello-mvc")
    public String helloMvc(@RequestParam(name="name", required = false) String name, Model model){
        model.addAttribute("name", name);
        return "hello-template";
    }

    // @ResponseBody : view name이 아니라 return 의 문자열을 그대로 요청장소로 가져간다.
    // view에서는 html없이 그냥 문자열만 보이게 됨
    @GetMapping("hello-string")
    @ResponseBody
    public String helloString(@RequestParam("name") String name) {
        return "hello "+name+"!!";
    }

    @GetMapping("hello-api")
    @ResponseBody
    public Hello helloApi(@RequestParam(name="name") String name){
        Hello h = new Hello();
        h.setName(name);
        return h;
        // 이렇게 반환하면 json형식으로 전달되는게 기본.
    }

    public class Hello {
        private String name;

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }
    }
}
