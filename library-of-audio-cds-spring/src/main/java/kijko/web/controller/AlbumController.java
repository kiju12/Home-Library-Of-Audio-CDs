package kijko.web.controller;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.forwardedUrl;

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
import kijko.web.domain.Track;
import kijko.web.repository.AlbumRepository;
import kijko.web.repository.ArtistRepository;
import kijko.web.repository.GenreRepository;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class AlbumController {

	@Autowired
	private AlbumRepository albumRepo;
	
	@Autowired
	private ArtistRepository artistRepo;
	
	@Autowired
	private GenreRepository genreRepo;
		
	@GetMapping("/api/custom/albums")
	public List<Album> getAll() {
		System.out.println("ELO");
		return albumRepo.findAll();
	}
	
	@GetMapping("/api/custom/albums/{id}")
	public Album getById(@PathVariable("id") Long id) {
		return albumRepo.findById(id).get();
	}
	
	@GetMapping("/api/custom/albums/artist/{id}")
	public List<Album> getDiscography(@PathVariable("id") Long artist_id) {
		return artistRepo.findById(artist_id).get().getDiscography();
	}
	
	@GetMapping("/api/custom/albums/genre/{id}")
	public List<Album> getAlbumsOfGenre(@PathVariable("id") Long genre_id) {
		return genreRepo.findById(genre_id).get().getAlbums();
	}
	
	@GetMapping("/api/custom/albums/TBA")
	public List<Album> getAlbumsWithoutGenre() {
		List<Album> albums = new ArrayList<>();
		for (Album album : albumRepo.findAll()) {
			if(album.getGenre() == null)
				albums.add(album);
		}
		
		return albums;
	}
	
	@PostMapping("/api/custom/albums")
	public Album add(@RequestBody Album album) {
		return albumRepo.save(album);
	}
	
	@PutMapping("/api/custom/albums/{id}")
	public Album update(@RequestBody Album album) {
		return albumRepo.save(album);
	}
	
	@DeleteMapping("/api/custom/albums/{id}")
	public void delete(@PathVariable("id") Long id) {
		albumRepo.deleteById(id);
	}
}
