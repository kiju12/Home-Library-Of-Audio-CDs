package kijko.web.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kijko.web.domain.Track;
import kijko.web.repository.TrackRepository;

@Service
public class TrackServiceImpl implements kijko.web.service.TrackService {

	@Autowired
	private TrackRepository trackRepo;
	
	@Override
	public List<Track> findAll() {
		return trackRepo.findAll();
	}

	@Override
	public Track findById(Long id) {
		return trackRepo.findById(id).get();
	}

	@Override
	public Track save(Track track) {
		return trackRepo.save(track);
	}

	@Override
	public List<Track> saveAll(List<Track> tracks) {
		return trackRepo.saveAll(tracks);
	}

	@Override
	public void deleteById(Long id) {
		trackRepo.deleteById(id);
	}

}
