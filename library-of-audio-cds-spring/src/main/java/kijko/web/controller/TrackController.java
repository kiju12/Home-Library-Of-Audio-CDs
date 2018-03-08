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
import kijko.web.service.AlbumService;
import kijko.web.service.TrackService;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class TrackController {

	@Autowired
	private TrackService trackService;
	
	@Autowired
	private AlbumService albumService;
	
	@GetMapping("/api/custom/tracks")
	public List<Track> getAll() {
		return trackService.findAll();
	}
	
	@GetMapping("/api/custom/tracks/{id}")
	public Track getById(@PathVariable("id") Long id) {
		return trackService.findById(id);
	}
	
	@GetMapping("/api/custom/albums/track/{id}")
	public Album getAlbumOfTrack(@PathVariable("id") Long track_id) {
		return trackService.findById(track_id).getAlbum();
	}
	
	@PostMapping("/api/custom/albums/{id}/tracks")
	public Track add(@RequestBody Track track, @PathVariable("id") Long albumId) {
		track.setAlbum(albumService.findById(albumId));
		return trackService.save(track);
	}
	
	@PostMapping("/api/custom/albums/{id}/tracksArray")
	public List<Track> addAll(@RequestBody List<Track> tracks, @PathVariable("id") Long albumId) {
		Album album = albumService.findById(albumId);
		
		for (Track track : tracks) {
			track.setAlbum(album);
		}

		return trackService.saveAll(tracks);
	}
	
	@PutMapping("/api/custom/albums/{id}/tracks")
	public Track update(@RequestBody Track track, @PathVariable("id") Long albumId) {
		track.setAlbum(albumService.findById(albumId));
		return trackService.save(track);
	}
	
	@DeleteMapping("/api/custom/tracks/{id}")
	public void delete(@PathVariable("id") Long id) {
		trackService.deleteById(id);
	}
}
