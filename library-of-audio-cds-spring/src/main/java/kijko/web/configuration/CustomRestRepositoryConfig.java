package kijko.web.configuration;

import javax.sound.midi.Track;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;

import kijko.web.domain.Album;
import kijko.web.domain.Artist;
import kijko.web.domain.Genre;

@Configuration
public class CustomRestRepositoryConfig extends RepositoryRestConfigurerAdapter {

	@Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration configuration) {
        configuration.exposeIdsFor(Album.class, Artist.class, Genre.class, Track.class);
    }
}
