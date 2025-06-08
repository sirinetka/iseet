package com.example.clientservice;

import com.example.clientservice.entities.Client;
import com.example.clientservice.repository.ClientRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ClientServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(ClientServiceApplication.class, args);
    }
    @Bean
    CommandLineRunner start(ClientRepository clientRepository){

        return args -> {

            Client c=Client.builder()
                    .name("amira")
                    .adresse("tunis")
                    .email("amira@gmail.com")
                    .build();
            clientRepository.save(c);


            System.out.println(" nom est " +c.getName()+" habite a  "+c.getAdresse());


            Client c2=Client.builder()
                    .name("samira")
                    .adresse("monastir")
                    .email("samira@gmail.com")
                    .build();
            clientRepository.save(c2);


            System.out.println(" nom est " +c2.getName()+" habite a  "+c2.getAdresse());

            Client c3=Client.builder()
                    .name("ahmed")
                    .adresse("sfaw")
                    .email("ahmed@gmail.com")
                    .build();
            clientRepository.save(c3);


            System.out.println(" nom est " +c3.getName()+" habite a  "+c3.getAdresse());

            Client c4=Client.builder()
                    .name("moahemd")
                    .adresse("tunis")
                    .email("mohamed@gmail.com")
                    .build();
            clientRepository.save(c4);

            Client c5=Client.builder()
                    .name("amine")
                    .adresse("sousse")
                    .email("amine@gmail.com")
                    .build();
            clientRepository.save(c5);


            System.out.println(" nom est " +c4.getName()+" habite a  "+c4.getAdresse());


        };



    }

}
