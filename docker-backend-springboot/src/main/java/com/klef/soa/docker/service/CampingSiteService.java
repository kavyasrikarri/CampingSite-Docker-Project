
package com.klef.soa.docker.service;

import java.util.List;

import com.klef.soa.docker.entity.CampingSite;

public interface CampingSiteService {

    CampingSite addCampingSite(CampingSite site);

    List<CampingSite> getAllCampingSites();

    String deleteCampingSite(Long id);
}
