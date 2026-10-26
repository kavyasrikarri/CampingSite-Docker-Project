
package com.klef.soa.docker.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Column;

@Entity
public class CampingSite {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String siteName;

    @Column(nullable = false)
    private String location;

    @Column(nullable = false)
    private Integer tentCapacity;

    @Column(nullable = false)
    private Double nightlyFee;

    public CampingSite() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSiteName() {
        return siteName;
    }

    public void setSiteName(String siteName) {
        this.siteName = siteName;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Integer getTentCapacity() {
        return tentCapacity;
    }

    public void setTentCapacity(Integer tentCapacity) {
        this.tentCapacity = tentCapacity;
    }

    public Double getNightlyFee() {
        return nightlyFee;
    }

    public void setNightlyFee(Double nightlyFee) {
        this.nightlyFee = nightlyFee;
    }
}
