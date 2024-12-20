package io.codeforall.Good_neighbours.repository;

import io.codeforall.Good_neighbours.model.Volunteer;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface VolunteerRepository extends MongoRepository<Volunteer, String> {
    Volunteer findByUsername(String username);
}