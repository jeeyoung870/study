package com.base.myspring;

import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.function.Consumer;

public class LambdaTest {
    @Test
    public void run() {
        //Anonymous Inner class
        Thread t1 = new Thread(new Runnable() {
            @Override
            public void run() {
                System.out.println("LambdaTest.run");
            }
        });
        t1.start();

        Thread t2 = new Thread(() -> System.out.println("람다식"));
        t2.start();
    }

    @Test
    public void consumer() {
        //ctrl + alt +v
        List<String> stringList = List.of("aa", "bb", "cc", "dd");
        stringList.forEach(new Consumer<String>() {
            @Override
            public void accept(String s) {
                System.out.println("문자열 = " + s);
            }
        });
        //람다식 Consumer void accept(T t)
        stringList.forEach(value -> System.out.println(value));
        //Method Reference
        stringList.forEach(System.out::println);

    }
}
