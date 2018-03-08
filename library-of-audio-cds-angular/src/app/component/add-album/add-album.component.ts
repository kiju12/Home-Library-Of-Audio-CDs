import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Artist } from '../../domain/artist';
import { Genre } from '../../domain/genre';
import { Track } from '../../domain/track';
import { Album } from '../../domain/album';
import { AlbumService } from '../../service/album.service';
import { ArtistService } from '../../service/artist.service';
import { GenreService } from '../../service/genre.service';
import { TrackService } from '../../service/track.service';


@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.css']
})
export class AddAlbumComponent implements OnInit {

  allArtists: Artist[] = [];
  allGenres: Genre[] = [];

  albumWhitespaceError = false;
  artistWhitespaceError = false;
  albumAdded: Boolean;

  currentTrackList: Track[] = [];

  addAlbumForm: FormGroup;
  addTrackForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private albumService: AlbumService,
    private artistService: ArtistService,
    private genreService: GenreService,
    private trackService: TrackService) { }

  ngOnInit() {
    this.createForms();
    this.initLists();
    this.onChangesInForm();
    this.albumAdded = false;
  }

  onAlbumSubmit() {
    const artistName = this.addAlbumForm.value.name.trim();
    let genreName = this.addAlbumForm.value.genre.trim();
    const albumName = this.addAlbumForm.value.albumName.trim();
    const tracksOnAlbum = this.currentTrackList.length;
    let albumMins = 0;
    let albumSecs = 0;

    for (let i = 0; i < this.currentTrackList.length; i++) {
      albumMins += this.currentTrackList[i].lengthMin;
      albumSecs += this.currentTrackList[i].lengthSec;
    }

    console.log(albumMins);
    console.log(albumSecs);

    if (genreName == null || genreName === '') {
      genreName = 'Nieznany';
    }

    let artist: Artist = new Artist(artistName);
    const lookedFor = this.artistExist(artistName);
    if (lookedFor != null) {
      artist = lookedFor;
    }
    this.artistService.add(artist).subscribe((artistRes: any) => {
      artist = artistRes as Artist;
      console.log('id artysty: ' + artist.id);

      let genre: Genre = new Genre(genreName);
      const genreLookedFor = this.genreExist(genreName);
      if (genreLookedFor != null) {
        genre = genreLookedFor;
      }
      this.genreService.add(genre).subscribe((genreRes: any) => {
        genre = genreRes as Genre;
        this.allGenres.push(genre);
        console.log('id generacji: ' + genre.id);

        let album: Album = new Album(artist, albumName, tracksOnAlbum, albumMins, albumSecs, genre);
        this.albumService.add(album).subscribe((albumRes: any) => {
          album = albumRes as Album;
          console.log('id albumu: ' + album.id);

          for (let i = 0; i < this.currentTrackList.length; i++) {
            this.currentTrackList[i].album = album;
          }

          this.trackService.addAll(this.currentTrackList, album.id).subscribe((tracksRes: any) => {
            this.currentTrackList = tracksRes as Track[];
            for (let i = 0; i < this.currentTrackList.length; i++) {
              console.log(this.currentTrackList[i].id);
            }

            this.allArtists.push(artist);
            this.addAlbumForm.reset();
            this.currentTrackList = [];
            this.albumAdded = true;
          });
        });
      });
    });

  }

  onTrackSubmit(value: any) {
    console.log('Dodaj track');
    let min: number = +value.lengthMin;
    let sec: number = +value.lengthSec;
    let producerName = value.producerName;
    let title = value.title;

    if (producerName != null) {
      value.producerName.trim();
    }

    if (title.trim() === '') {
      title = 'Bez tytułu';
    }

    if (producerName == null || producerName === '') {
      producerName = 'Nieznany';
    }

    while (sec >= 60) {
      sec -= 60;
      min++;
    }

    const t: Track = new Track(null, title, producerName, min, sec);
    this.currentTrackList.push(t);
    this.addTrackForm.reset();

  }

  onChangesInForm() {
    this.addTrackForm.get('lengthMin').valueChanges.subscribe(value => {
      if (isNaN(+value) && value != null) {
        this.addTrackForm.get('lengthMin').reset();
      }
    });

    this.addTrackForm.get('lengthSec').valueChanges.subscribe(value => {
      if (isNaN(+value) && value != null) {
        this.addTrackForm.get('lengthSec').reset();
      }
    });

    this.addAlbumForm.get('name').valueChanges.subscribe(value => {
      if (value == null) {
        return;
      }

      if (value.trim() === '' && value.length !== 0) {
        this.artistWhitespaceError = true;
      } else {
        this.artistWhitespaceError = false;
      }
    });

    this.addAlbumForm.get('albumName').valueChanges.subscribe(value => {
      if (value == null) {
        return;
      }

      if (value.trim() === '' && value.length !== 0) {
        this.albumWhitespaceError = true;
      } else {
        this.albumWhitespaceError = false;
      }
    });

  }

  removeTrack(index: number) {
    delete this.currentTrackList[index];

    for (let j = index; j < this.currentTrackList.length; j++) {
      this.currentTrackList[j] = this.currentTrackList[j + 1];
    }

    this.currentTrackList.pop();
  }

  initLists() {
    this.genreService.getAll().subscribe((data: any) => {
      this.allGenres = data._embedded.genres as Genre[];
    });
    this.artistService.getAll().subscribe((data: any) => {
      this.allArtists = data._embedded.artists as Artist[];
    });
  }

  createForms() {
    this.addAlbumForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      genre: '',
      albumName: ['', [Validators.required, Validators.minLength(3)]]
    });

    this.addTrackForm = this.formBuilder.group({
      title: ['', Validators.required],
      producerName: '',
      lengthMin: ['', Validators.required],
      lengthSec: ['', Validators.required]
    });
  }

  private artistExist(artist: string): Artist {
    for (let i = 0; i < this.allArtists.length; i++) {
      if (this.allArtists[i].name.toLowerCase() === artist.toLowerCase()) {
        return this.allArtists[i];
      }
    }

    return null;
  }

  private genreExist(genre: string): Genre {
    for (let i = 0; i < this.allGenres.length; i++) {
      if (this.allGenres[i].name.toLowerCase() === genre.toLowerCase()) {
        return this.allGenres[i];
      }
    }
    return null;
  }
}
