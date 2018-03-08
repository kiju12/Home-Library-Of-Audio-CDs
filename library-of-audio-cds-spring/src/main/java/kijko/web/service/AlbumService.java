package kijko.web.service;

import java.util.List;

import kijko.web.domain.Album;

public interface AlbumService {

	List<Album> findAll();
	Album findById(Long id);
	Album save(Album album);
	Album update(Album album);
	void deleteById(Long id);
}
