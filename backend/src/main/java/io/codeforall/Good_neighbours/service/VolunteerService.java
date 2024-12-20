package io.codeforall.Good_neighbours.service;

import io.codeforall.Good_neighbours.model.Volunteer;
import io.codeforall.Good_neighbours.repository.VolunteerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VolunteerService {

    @Autowired
    private VolunteerRepository volunteerRepository;

    public List<Volunteer> getAllVolunteers() {
        return volunteerRepository.findAll();
    }

    public Volunteer getVolunteerById(String id) {
        return volunteerRepository.findById(id).orElse(null);
    }

    public Volunteer createVolunteer(Volunteer volunteer) {
        return volunteerRepository.save(volunteer);
    }

    public Volunteer updateVolunteer(String id, Volunteer volunteer) {
        if (volunteerRepository.existsById(id)) {
            volunteer.setId(id);
            return volunteerRepository.save(volunteer);
        }
       return null;
    }

    public void deleteVolunteer(String id) {
        volunteerRepository.deleteById(id);
    }
}