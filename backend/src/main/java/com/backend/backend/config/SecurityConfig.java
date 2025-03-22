package com.backend.backend.config;

import javax.sql.DataSource;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.JdbcUserDetailsManager;
import org.springframework.security.provisioning.UserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Bean
    public SecurityFilterChain sercurityFilterChain(HttpSecurity http) throws Exception{
        return http
                .authorizeHttpRequests(auth -> auth
                                                .requestMatchers("/register").permitAll()
                                                .requestMatchers("/addCart/**").permitAll()
                                                .anyRequest().authenticated()
                                        )
                                        .formLogin(form -> form
                                                            .defaultSuccessUrl("/home", true)
                                                    )
                                                    .logout(config -> config.logoutSuccessUrl("/")).build();
    }

    @Bean
    public UserDetailsManager userDetailsManager(DataSource dataSource){
        JdbcUserDetailsManager jdbcUserManager = new JdbcUserDetailsManager(dataSource);
        jdbcUserManager.setUsersByUsernameQuery("select username, password, enabled from Users where username = ?");
        jdbcUserManager.setAuthoritiesByUsernameQuery("select username, authority from Roles where username = ?");
        return jdbcUserManager;
    }

    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

}
