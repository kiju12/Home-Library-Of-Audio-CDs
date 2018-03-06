package kijko.web.domain;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Track implements Serializable {

	private static final long serialVersionUID = -8092945804645610586L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	private String name;
	
	private String producerName;
	
	private double length;
	
	@ManyToOne(cascade= { CascadeType.DETACH, CascadeType.REFRESH, CascadeType.MERGE }, optional=false)
	private Album album;
	
	public Track() {}
	
	public Track(Album album, String name, String producerName, double length) {
		this.album = album;
		this.name = name;
		this.producerName = producerName;
		this.length = length;
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

	public double getLength() {
		return length;
	}

	public void setLength(double length) {
		this.length = length;
	}
	
	
}
