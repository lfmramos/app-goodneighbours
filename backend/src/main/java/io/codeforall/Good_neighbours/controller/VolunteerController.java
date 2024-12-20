package io.codeforall.Good_neighbours.controller;

import io.codeforall.Good_neighbours.model.Volunteer;
import io.codeforall.Good_neighbours.service.VolunteerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/volunteers")
@CrossOrigin(origins = "*")
public class VolunteerController {

    @Autowired
    private VolunteerService volunteerService;

    @GetMapping
    public List<Volunteer> getAllVolunteers() {
        return volunteerService.getAllVolunteers();
    }

    @GetMapping("/{id}")
    public Volunteer getVolunteerById(@PathVariable String id) {
        return volunteerService.getVolunteerById(id);
    }

    @PostMapping
    public Volunteer createVolunteer(@RequestBody Volunteer volunteer) {
        return volunteerService.createVolunteer(volunteer);
    }

    @PutMapping("/{id}")
    public Volunteer updateVolunteer(@PathVariable String id, @RequestBody Volunteer volunteer) {
        return volunteerService.updateVolunteer(id, volunteer);
    }

    @DeleteMapping("/{id}")
    public void deleteVolunteer(@PathVariable String id) {
        volunteerService.deleteVolunteer(id);
    }
}