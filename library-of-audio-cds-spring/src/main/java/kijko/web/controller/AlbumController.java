package kijko.web.controller;


import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import kijko.web.domain.Album;
import kijko.web.service.AlbumService;
import kijko.web.service.ArtistService;
import kijko.web.service.GenreService;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class AlbumController {

	@Autowired
	private AlbumService albumService;
	
	@Autowired
	private ArtistService artistService;
	
	@Autowired
	private GenreService genreService;
		
	@GetMapping("/api/custom/albums")
	public List<Album> getAll() {
		return albumService.findAll();
	}
	
	@GetMapping("/api/custom/albums/{id}")
	public Album getById(@PathVariable("id") Long id) {
		return albumService.findById(id);
	}
	
	@GetMapping("/api/custom/albums/artist/{id}")
	public List<Album> getDiscography(@PathVariable("id") Long artist_id) {
		return artistService.findById(artist_id).getDiscography();
	}
	
	@GetMapping("/api/custom/albums/genre/{id}")
	public List<Album> getAlbumsOfGenre(@PathVariable("id") Long genre_id) {
		return genreService.findById(genre_id).getAlbums();
	}
	
	@GetMapping("/api/custom/albums/TBA")
	public List<Album> getAlbumsWithoutGenre() {
		List<Album> albums = new ArrayList<>();
		for (Album album : albumService.findAll()) {
			if(album.getGenre() == null)
				albums.add(album);
		}
		
		return albums;
	}
	
	@PostMapping("/api/custom/albums")
	public Album add(@RequestBody Album album) {
		return albumService.save(album);
	}
	
	@PutMapping("/api/custom/albums/{id}")
	public Album update(@RequestBody Album album) {
		return albumService.save(album);
	}
	
	@DeleteMapping("/api/custom/albums/{id}")
	public void delete(@PathVariable("id") Long id) {
		albumService.deleteById(id);
	}
}
