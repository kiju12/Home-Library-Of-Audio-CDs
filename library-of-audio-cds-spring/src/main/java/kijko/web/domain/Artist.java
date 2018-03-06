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
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;


@Entity
public class Artist implements Serializable {

	private static final long serialVersionUID = -1931137912926391839L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	private String name;
	
	@JsonIgnore
	@OneToMany(cascade= { CascadeType.REMOVE, CascadeType.REFRESH }, fetch = FetchType.EAGER, mappedBy = "artist")
	private List<Album> discography;
	
	public Artist() {}
	
	public Artist(String name, List<Album> discography) {
		this.name = name;
		this.discography = discography;
	}
	
	public Artist(String name) {
		this.name = name;
		this.discography = new ArrayList<Album>();
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

	public List<Album> getDiscography() {
		return discography;
	}

	public void setDiscography(List<Album> discography) {
		this.discography = discography;
	}
	
}
