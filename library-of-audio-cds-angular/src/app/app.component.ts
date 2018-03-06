import { Component } from '@angular/core';
import { AlbumService } from './service/album.service';
import { Album } from './domain/album';
import { Artist } from './domain/artist';
import { Track } from './domain/track';
import { Genre } from './domain/genre';
import { ArtistService } from './service/artist.service';
import { GenreService } from './service/genre.service';
import { TrackService } from './service/track.service';
import { MessagesService } from './service/messages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  messagess = '';
  albumList: Album[] = [];
  albumOne: Album;
  artist: Artist;
  trackList: Track[];
  genre: Genre;

  constructor(private albumService: AlbumService,
    private artistService: ArtistService,
    private genreService: GenreService,
    private trackService: TrackService,
    private messages: MessagesService) {

    messages.getMessages().subscribe((data: any) => this.messagess = data);
  }

  readAlbums(): void {
    // let bialas: Artist = new Artist('Bialas');
    // this.artistService.add(bialas).subscribe((aData: any) => {
    //   bialas = aData as Artist;
    //   console.log('id artysty: ' + bialas.id);

    //   let genre: Genre = new Genre('Disco Polo');
    //   this.genreService.add(genre).subscribe((gData: any) => {
    //     genre = gData as Genre;
    //     console.log('id generacji: ' + genre.id);

    //     let album: Album = new Album(bialas, 'Polon', 20, 83, genre);
    //     this.albumService.add(album).subscribe((alData: any) => {
    //       album = alData as Album;
    //       console.log('id albumu: ' + album.id);

    //       let track: Track = new Track(album, 'Osiedle Botox', 'Lanek', 3);
    //       this.trackService.add(track, album.id).subscribe((tData: any) => {
    //         track = tData;
    //         console.log('id track: ' + track.id);

    //         this.albumService.delete(album.id);
    //       });
    //     });
    //   });
    // });
  }

}
