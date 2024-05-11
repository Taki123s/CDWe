package org.example;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Test{
    public static void method1(){//more code here

    }
    public void method2(){//more code here

    }

    public static void main(String[] args) {
        String test = "1a2b3c4d 5";
        String[] tokens = test.split("\\d");
        System.out.println(Arrays.toString(tokens));

    }
}
