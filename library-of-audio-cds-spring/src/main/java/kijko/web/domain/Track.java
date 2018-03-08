package kijko.web.domain;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
public class Track implements Serializable {

	private static final long serialVersionUID = -8092945804645610586L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	private String name;
	
	private String producerName;
	
	private int lengthMin;
	private int lengthSec;
	
	@JsonIgnore
	@ManyToOne(cascade= { CascadeType.DETACH, CascadeType.REFRESH, CascadeType.MERGE }, optional=false)
	private Album album;
	
	public Track() {}
	
	public Track(Album album, String name, String producerName, int lengthMin, int lengthSec) {
		this.album = album;
		this.name = name;
		this.producerName = producerName;
		this.lengthMin = lengthMin;
		this.lengthSec = lengthSec;
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

	public String getProducerName() {
		return producerName;
	}

	public void setProducerName(String producerName) {
		this.producerName = producerName;
	}


	public int getLengthMin() {
		return lengthMin;
	}

	public void setLengthMin(int lengthMin) {
		this.lengthMin = lengthMin;
	}

	public int getLengthSec() {
		return lengthSec;
	}

	public void setLengthSec(int lengthSec) {
		this.lengthSec = lengthSec;
	}

	public Album getAlbum() {
		return album;
	}

	public void setAlbum(Album album) {
		this.album = album;
	}
	
	
}
