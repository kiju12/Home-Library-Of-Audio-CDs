import { Injectable } from '@angular/core';
import { HEADERS, API_URL } from './apiconfig';
import { Observable } from 'rxjs/Observable';
import { Album } from '../domain/album';
import { Genre } from '../domain/genre';
import { HttpClient } from '@angular/common/http';
import { Track } from '../domain/Track';
import { Artist } from '../domain/Artist';

@Injectable()
export class AlbumService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Album[]> {
    return this.http.get<Album[]>(`${API_URL}/custom/albums`, HEADERS);
  }

  getById(id: number): Observable<Album> {
    return this.http.get<Album>(`${API_URL}/custom/albums/${id}`, HEADERS);
  }

  getDiscography(artistId: number): Observable<Album[]> {
    return this.http.get<Album[]>(`${API_URL}/custom/albums/artist/${artistId}`, HEADERS);
  }

  getAlbumsOfGenre(genreId: number): Observable<Album[]> {
    return this.http.get<Album[]>(`${API_URL}/custom/albums/genre/${genreId}`, HEADERS);
  }

  getAlbumsWithoutGenre(): Observable<Album[]> {
    return this.http.get<Album[]>(`${API_URL}/custom/albums/TBA`, HEADERS);
  }

  add(album: Album): Observable<Album> {
    return this.http.post<Album>(`${API_URL}/custom/albums`, album, HEADERS);
  }

  update(album: Album): Observable<Album> {
    if (album.id == null) {
      console.log('Update filed - Id undefinied');
      return;
    }

    return this.http.put<Album>(`${API_URL}/custom/albums/${album.id}`, album, HEADERS);
  }

  delete(id: number): void {
    this.http.delete<Album>(`${API_URL}/custom/albums/${id}`, HEADERS).subscribe();
  }
}
