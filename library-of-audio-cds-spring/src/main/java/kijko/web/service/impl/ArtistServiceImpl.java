package kijko.web.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kijko.web.domain.Artist;
import kijko.web.repository.ArtistRepository;
import kijko.web.service.ArtistService;

@Service
public class ArtistServiceImpl implements ArtistService {

	@Autowired
	private ArtistRepository artistRepo;
	
	@Override
	public Artist findById(Long id) {
		return artistRepo.findById(id).get();
	}

}
