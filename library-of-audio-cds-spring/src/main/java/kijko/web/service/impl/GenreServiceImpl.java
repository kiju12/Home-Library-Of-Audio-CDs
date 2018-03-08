package kijko.web.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kijko.web.domain.Genre;
import kijko.web.repository.GenreRepository;
import kijko.web.service.GenreService;

@Service
public class GenreServiceImpl implements GenreService {

	@Autowired
	private GenreRepository genreRepo;
	
	@Override
	public Genre findById(Long id) {
		return genreRepo.findById(id).get();
	}

	@Override
	public void deleteById(Long id) {
		genreRepo.deleteById(id);
	}

}
