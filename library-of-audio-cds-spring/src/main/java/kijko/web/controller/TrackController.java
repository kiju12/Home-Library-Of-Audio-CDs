package kijko.web.controller;

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
import kijko.web.repository.TrackRepository;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class TrackController {

	@Autowired
	private TrackRepository trackRepo;
	
	@Autowired
	private AlbumRepository albumRepo;
	
	@GetMapping("/api/custom/tracks")
	public List<Track> getAll() {
		return trackRepo.findAll();
	}
	
	@GetMapping("/api/custom/tracks/{id}")
	public Track getById(@PathVariable("id") Long id) {
		return trackRepo.findById(id).get();
	}
	
	@GetMapping("/api/custom/albums/track/{id}")
	public Album getAlbumOfTrack(@PathVariable("id") Long track_id) {
		return trackRepo.findById(track_id).get().getAlbum();
	}
	
	@PostMapping("/api/custom/albums/{id}/tracks")
	public Track add(@RequestBody Track track, @PathVariable("id") Long albumId) {
		track.setAlbum(albumRepo.findById(albumId).get());
		return trackRepo.save(track);
	}
	
	@PostMapping("/api/custom/albums/{id}/tracksArray")
	public List<Track> addAll(@RequestBody List<Track> tracks, @PathVariable("id") Long albumId) {
		Album album = albumRepo.findById(albumId).get();
		
		for (Track track : tracks) {
			track.setAlbum(album);
		}

		return trackRepo.saveAll(tracks);
	}
	
	@PutMapping("/api/custom/albums/{id}/tracks")
	public Track update(@RequestBody Track track, @PathVariable("id") Long albumId) {
		track.setAlbum(albumRepo.findById(albumId).get());
		return trackRepo.save(track);
	}
	
	@DeleteMapping("/api/custom/tracks/{id}")
	public void delete(@PathVariable("id") Long id) {
		trackRepo.deleteById(id);
	}
}
