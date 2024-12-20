package io.codeforall.Good_neighbours;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
public class GoodNeighboursApplication {

	public static void main(String[] args) {

		SpringApplication.run(GoodNeighboursApplication.class, args);
		VolunteerDataGenerator generator = new VolunteerDataGenerator();
		generator.generateFakeVolunteers();	}

}
