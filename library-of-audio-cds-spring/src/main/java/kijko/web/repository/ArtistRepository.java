package kijko.web.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.stereotype.Repository;

import kijko.web.domain.Artist;

@Repository
@RestResource(path = "/artists")
public interface ArtistRepository extends JpaRepository<Artist, Long> {

}
