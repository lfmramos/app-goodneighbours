package io.codeforall.Good_neighbours;

import com.github.javafaker.Faker;
import com.mongodb.MongoClientSettings;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;

import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.Random;
import java.util.concurrent.TimeUnit;

public class VolunteerDataGenerator {
    public void generateFakeVolunteers() {
        Faker faker = new Faker(new Locale("pt-PT"));

        MongoClientSettings settings = MongoClientSettings.builder()
                .applyConnectionString(new com.mongodb.ConnectionString("mongodb+srv://luisramos:IrRN32F1v0T0EOra@cluster0.zgory.mongodb.net/good_neighbours?retryWrites=true&w=majority&appName=Cluster0"))
                .applyToSocketSettings(builder -> builder.connectTimeout(10, TimeUnit.SECONDS).readTimeout(10, TimeUnit.SECONDS))
                .build();

        MongoClient mongoClient = MongoClients.create(settings);
        MongoDatabase database = mongoClient.getDatabase("good_neighbours");
        MongoCollection<Document> collection = database.getCollection("volunteers");

        // Drop the existing collection
        collection.drop();

        List<String> skillsList = List.of("Cozinhar", "Limpeza", "Apoio a idosos", "Jardinagem", "Compras", "Companhia", "Transporte", "Cuidado de animais", "Manutenção");

        List<Document> volunteers = new ArrayList<>();
        for (int i = 0; i < 50; i++) {
            int numberOfSkills = new Random().nextInt(3) + 1; // Random number between 1 and 3
            List<String> randomSkills = skillsList.subList(0, numberOfSkills);
            String formattedAddress = faker.address().streetName() + ", " + faker.address().buildingNumber();
            String formattedZipCode = faker.numerify("4###-###");
            String formattedNeighbnourhood = faker.address().cityName();
            Document volunteer = new Document()
                    .append("firstName", faker.name().firstName())
                    .append("lastName", faker.name().lastName())
                    .append("birthday", faker.date().birthday())
                    .append("email", faker.internet().emailAddress())
                    .append("phone", faker.numerify("9########"))
                    .append("address", formattedAddress)
                    .append("city", faker.address().city())
                    .append("neighbourhood", formattedNeighbnourhood)
                    .append("zipcode", formattedZipCode)
                    .append("password", faker.internet().password())
                    .append("username", faker.name().username())
                    .append("image", faker.file().fileName(null, null, "jpg", null))
                    .append("NIF", faker.numerify("#########"))
                    .append("CC", faker.numerify("#########") + " ZZ" + faker.number().randomDigit())
                    .append("skills", randomSkills);
            volunteers.add(volunteer);
        }

        collection.insertMany(volunteers);
        System.out.println("Data inserted successfully!");
    }
}