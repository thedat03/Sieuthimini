package com.project.shopapp.configurations;

import org.springframework.context.MessageSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.support.ResourceBundleMessageSource;

@Configuration
public class LanguageConfig {

    @Bean
    public MessageSource messageSource() {
        ResourceBundleMessageSource messageSource = new ResourceBundleMessageSource();
        // Chỉ định vị trí các tệp tài nguyên ngôn ngữ
        messageSource.setBasename("messages"); // Không cần `i18n.` vì `ResourceBundleMessageSource` tự động tìm kiếm
        messageSource.setDefaultEncoding("UTF-8"); // Đảm bảo mã hóa UTF-8 cho thông báo
        messageSource.setUseCodeAsDefaultMessage(true); // Sử dụng mã khóa nếu không tìm thấy thông báo
        return messageSource;
    }
}
