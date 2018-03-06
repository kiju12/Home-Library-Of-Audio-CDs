package kijko.web.domain;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Album implements Serializable {

	private static final long serialVersionUID = -3000159690649506162L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	private String name;
	
	private double length;
	
	private int numberOfSongs;
	
	@ManyToOne(cascade= { CascadeType.DETACH, CascadeType.REFRESH, CascadeType.MERGE }, optional=false)
	private Artist artist;
	
	@OneToMany(cascade= { CascadeType.REMOVE, CascadeType.REFRESH }, fetch = FetchType.EAGER, mappedBy = "album")
	private List<Track> trackList;
	
	@ManyToOne
	private Genre genre;
	
	public Album() {}

	public Album(Artist art, String name, double length, int numberOfSongs, List<Track> trackList, Genre genre) {
		this.artist = art;
		this.name = name;
		this.length = length;
		this.numberOfSongs = numberOfSongs;
		this.trackList = trackList;
		this.genre = genre;
	}
	
	public Album(Artist art, String name, double length, int numberOfSongs, Genre genre) {
		this.artist = art;

		this.name = name;
		this.length = length;
		this.numberOfSongs = numberOfSongs;
		this.trackList = new ArrayList<Track>(numberOfSongs);
		this.genre = genre;
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

	public double getLength() {
		return length;
	}

	public void setLength(double length) {
		this.length = length;
	}

	public int getNumberOfSongs() {
		return numberOfSongs;
	}

	public void setNumberOfSongs(int numberOfSongs) {
		this.numberOfSongs = numberOfSongs;
	}

	public Artist getArtist() {
		return artist;
	}

	public void setArtist(Artist artist) {
		this.artist = artist;
	}

	
	
	public List<Track> getTrackList() {
		return trackList;
	}

	public void setTrackList(List<Track> trackList) {
		this.trackList = trackList;
	}

	public Genre getGenre() {
		return genre;
	}

	public void setGenre(Genre genre) {
		this.genre = genre;
	}
	
}
