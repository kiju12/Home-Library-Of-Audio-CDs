import { Component, OnInit } from '@angular/core';
import { Album } from '../../domain/album';
import { AlbumService } from '../../service/album.service';
import { Artist } from '../../domain/artist';
import { ArtistService } from '../../service/artist.service';
import { Genre } from '../../domain/genre';
import { GenreService } from '../../service/genre.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

  allAlbums: Album[] = [];
  allArtists: Artist[] = [];
  allGenres: Genre[] = [];
  filterOption = 'artist';
  lengthFilterForm: FormGroup;

  constructor(private albumService: AlbumService,
    private artistService: ArtistService,
    private genreService: GenreService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initList();
    this.createForm();
    this.lengthFilterFormOnChange();
  }

  createForm() {
    this.lengthFilterForm = this.formBuilder.group({
      greaterThan: ['', Validators.required],
      lessThan: ['', Validators.required]
    });
  }

  lengthFilterFormOnChange() {
    this.lengthFilterForm.get('greaterThan').valueChanges.subscribe(value => {
      if (isNaN(+value)) {
        this.lengthFilterForm.get('greaterThan').reset();
      }
    });

    this.lengthFilterForm.get('lessThan').valueChanges.subscribe(value => {
      if (isNaN(+value)) {
        this.lengthFilterForm.get('lessThan').reset();
      }
    });
  }

  initList() {
    this.albumService.getAll().subscribe((res: any) => {
      this.allAlbums = res as Album[];
    });

    this.artistService.getAll().subscribe((res: any) => {
      this.allArtists = res._embedded.artists as Artist[];
    });

    this.genreService.getAll().subscribe((res: any) => {
      this.allGenres = res._embedded.genres as Genre[];
    });
  }

  filterByArtist(id: number) {
    this.albumService.getAll().subscribe((res: any) => {
      this.allAlbums = res as Album[];
      const filtered: Album[] = this.allAlbums.filter(album => album.artist.id === id);
      this.allAlbums = filtered;
    });
  }

  filterByGenre(id: number) {
    this.albumService.getAll().subscribe((res: any) => {
      this.allAlbums = res as Album[];
      const filtered: Album[] = this.allAlbums.filter(album => album.genre.id === id);
      this.allAlbums = filtered;
    });
  }

  filterByLength() {
    const greaterThan = +this.lengthFilterForm.get('greaterThan').value;
    const lessThan = +this.lengthFilterForm.get('lessThan').value;

    this.albumService.getAll().subscribe((res: any) => {
      this.allAlbums = res as Album[];
      const filtered: Album[] = this.allAlbums.filter(album => (album.lengthMin > greaterThan && album.lengthMin <= lessThan));
      this.allAlbums = filtered;
      this.lengthFilterForm.reset();
    });
  }

  sortByArtist() {
    this.allAlbums.sort((a1, a2) => {
      if (a1.artist.name < a2.artist.name) {
        return -1;
      } else if (a1.artist.name > a2.artist.name) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  sortByName() {
    this.allAlbums.sort((a1, a2) => {
      if (a1.name < a2.name) {
        return -1;
      } else if (a1.name > a2.name) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  sortByTime() {
    this.allAlbums.sort((a1, a2) => {
      const time1 = a1.lengthMin * 60 + a1.lengthSec;
      const time2 = a2.lengthMin * 60 + a2.lengthSec;

      if (time1 < time2) {
        return -1;
      } else if (time1 > time2) {
        return 1;
      } else {
        return 0;
      }
    });

  }

  sortByNumberOfSongs() {
    this.allAlbums.sort((a1, a2) => {
      if (a1.numberOfSongs < a2.numberOfSongs) {
        return -1;
      } else if (a1.numberOfSongs > a2.numberOfSongs) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  sortByGenre() {
    this.allAlbums.sort((a1, a2) => {
      if (a1.genre.name < a2.genre.name) {
        return -1;
      } else if (a1.genre.name > a2.genre.name) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  deleteAlbum(index: number) {
    this.albumService.delete(this.allAlbums[index].id);

    delete this.allAlbums[index];

    for (let i = index; i < this.allAlbums.length; i++) {
      this.allAlbums[i] = this.allAlbums[i + 1];
    }

    this.allAlbums.pop();
  }
}
