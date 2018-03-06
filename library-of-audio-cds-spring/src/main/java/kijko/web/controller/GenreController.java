package kijko.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import kijko.web.domain.Album;
import kijko.web.repository.AlbumRepository;
import kijko.web.repository.GenreRepository;

@RestController
public class GenreController {

	@Autowired
	private GenreRepository genreRepo;
	
	@Autowired
	private AlbumRepository albumRepo;
	
	@DeleteMapping("/api/custom/genres/{id}")
	public void deleteGenre(@PathVariable("id") Long id) {
		for (Album album : genreRepo.findById(id).get().getAlbums()) {
			album.setGenre(null);
			albumRepo.save(album);
		}
		genreRepo.deleteById(id);
	}
}
