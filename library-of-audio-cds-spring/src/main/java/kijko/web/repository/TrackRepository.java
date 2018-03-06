package kijko.web.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.stereotype.Repository;

import kijko.web.domain.Track;

@Repository
@RestResource(path = "/tracks")
public interface TrackRepository extends JpaRepository<Track, Long> {

}
