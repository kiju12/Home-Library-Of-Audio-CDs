package kijko.web.domain;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Genre implements Serializable {
	
	private static final long serialVersionUID = -2136923356446091584L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	private String name;
	
	@OneToMany(mappedBy = "genre", fetch = FetchType.EAGER)
	private List<Album> albums;
	
	public Genre() {}

	public Genre(String name, List<Album> albums) {
		this.name = name;
		this.albums = albums;
	}
	
	public Genre(String name) {
		this.name = name;
		this.albums = new ArrayList<Album>();
	}
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<Album> getAlbums() {
		return albums;
	}

	public void setAlbums(List<Album> albums) {
		this.albums = albums;
	}
	
}
