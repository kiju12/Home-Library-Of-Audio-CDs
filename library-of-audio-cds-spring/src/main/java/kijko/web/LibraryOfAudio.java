package kijko.web;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import kijko.web.domain.Album;
import kijko.web.domain.Artist;
import kijko.web.domain.Genre;
import kijko.web.domain.Track;
import kijko.web.repository.AlbumRepository;
import kijko.web.repository.ArtistRepository;
import kijko.web.repository.GenreRepository;
import kijko.web.repository.TrackRepository;

@SpringBootApplication
public class LibraryOfAudio {
	
	@Autowired
	private AlbumRepository albumRepo;
	
	@Autowired
	private ArtistRepository artistRepo;
	
	@Autowired
	private TrackRepository trackRepo;
	
	@Autowired
	private GenreRepository genreRepo;
	
	public static void main(String[] args) {
		SpringApplication.run(LibraryOfAudio.class, args);
	}
	
	@PostConstruct
	public void dbTest() {
		//Algorytm dodawania pełnego albumu
		Artist artist = new Artist("Paluch");
		artist = artistRepo.save(artist);
		
		Genre gen = new Genre("HipHop");
		gen = genreRepo.save(gen);
		
		Album album = new Album(artist, "Złota Owca", 63, 20, gen);	
		album = albumRepo.save(album);

		Track track = new Track(album, "Ostatni krzyk osiedla", "Carson", 3.21);
		trackRepo.save(track);
	}
}
