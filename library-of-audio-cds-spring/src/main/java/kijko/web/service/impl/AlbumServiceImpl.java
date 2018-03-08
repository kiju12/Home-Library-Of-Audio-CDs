package kijko.web.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kijko.web.domain.Album;
import kijko.web.repository.AlbumRepository;
import kijko.web.service.AlbumService;

@Service
public class AlbumServiceImpl implements AlbumService {

	@Autowired
	private AlbumRepository albumRepo;
	
	@Override
	public List<Album> findAll() {
		return albumRepo.findAll();
	}

	@Override
	public Album findById(Long id) {
		return albumRepo.findById(id).get();
	}

	@Override
	public Album save(Album album) {
		return albumRepo.save(album);
	}

	@Override
	public Album update(Album album) {
		return albumRepo.save(album);
	}

	@Override
	public void deleteById(Long id) {
		albumRepo.deleteById(id);
	}

}
