package kijko.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import kijko.web.domain.Album;
import kijko.web.repository.AlbumRepository;
import kijko.web.repository.GenreRepository;
import kijko.web.service.AlbumService;
import kijko.web.service.GenreService;

@RestController
public class GenreController {

	@Autowired
	private GenreService genreService;
	
	@Autowired
	private AlbumService albumService;
	
	@DeleteMapping("/api/custom/genres/{id}")
	public void deleteGenre(@PathVariable("id") Long id) {
		for (Album album : genreService.findById(id).getAlbums()) {
			album.setGenre(null);
			albumService.save(album);
		}
		genreService.deleteById(id);
	}
}
