package kijko.web.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.stereotype.Repository;

import kijko.web.domain.Genre;

@Repository
@RestResource(path = "/genre")
public interface GenreRepository extends JpaRepository<Genre, Long> {

}
