package kijko.web.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.stereotype.Repository;

import kijko.web.domain.Album;

@Repository
@RestResource(path = "/albums")
public interface AlbumRepository extends JpaRepository<Album, Long> {

}
