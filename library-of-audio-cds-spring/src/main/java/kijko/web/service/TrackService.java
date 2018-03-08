package kijko.web.service;

import java.util.List;

import kijko.web.domain.Track;

public interface TrackService {

	List<Track> findAll();
	Track findById(Long id);
	Track save(Track track);
	List<Track> saveAll(List<Track> track);
	void deleteById(Long id);
}
