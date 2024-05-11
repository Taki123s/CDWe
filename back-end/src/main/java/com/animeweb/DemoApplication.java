package com.animeweb;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.support.ResourceBundleMessageSource;
import org.springframework.web.servlet.i18n.LocaleChangeInterceptor;

import java.util.Locale;

@SpringBootApplication
public class DemoApplication {
//    private  final LocaleChangeInterceptor localeChangeInterceptor;
//    public DemoApplication (LocaleChangeInterceptor _localeChangeInterceptor){
//       this.localeChangeInterceptor=_localeChangeInterceptor;
//    }
    public static void main(String[] args) {
//        ResourceBundleMessageSource messageSource = new ResourceBundleMessageSource();
//        messageSource.setBasenames("i18n/messages");
//        messageSource.setDefaultEncoding("UTF-8");
//        System.out.println(messageSource.getMessage("hello", null, Locale.ENGLISH));

        SpringApplication.run(DemoApplication.class, args);

    }

}
