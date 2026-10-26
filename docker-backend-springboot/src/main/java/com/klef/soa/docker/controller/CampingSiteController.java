
package com.klef.soa.docker.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.klef.soa.docker.entity.CampingSite;
import com.klef.soa.docker.service.CampingSiteService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/campingsite")
@CrossOrigin
public class CampingSiteController {

    @Autowired
    private CampingSiteService service;

    @GetMapping("/")
    public String home() {
        return "Camping Site Service is running";
    }

    @PostMapping("/add")
    public CampingSite addCampingSite(@Valid @RequestBody CampingSite site) {
        return service.addCampingSite(site);
    }

    @GetMapping("/displayall")
    public List<CampingSite> displayAll() {
        return service.getAllCampingSites();
    }

    @DeleteMapping("/delete/{id}")
    public String deleteCampingSite(@PathVariable Long id) {
        return service.deleteCampingSite(id);
    }
}
