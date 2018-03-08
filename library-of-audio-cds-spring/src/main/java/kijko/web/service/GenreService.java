package kijko.web.service;

import kijko.web.domain.Genre;

public interface GenreService {
	Genre findById(Long id);
	void deleteById(Long id);
}
