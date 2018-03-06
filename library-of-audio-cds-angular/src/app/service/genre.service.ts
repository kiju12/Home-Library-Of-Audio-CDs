import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Genre } from '../domain/genre';
import { API_URL, HEADERS } from './apiconfig';
import { Observable } from 'rxjs/Observable';
import { Album } from '../domain/album';
import { AlbumService } from './album.service';

@Injectable()
export class GenreService {

  constructor(private http: HttpClient,
    private albumService: AlbumService) { }

  getAll(): Observable<Genre[]> {
    return this.http.get<Genre[]>(`${API_URL}/genres`, HEADERS);
  }

  getById(id: number): Observable<Genre> {
    return this.http.get<Genre>(`${API_URL}/genres/${id}`, HEADERS);
  }

  getAlbums(id: number): Observable<Album[]> {
    return this.http.get<Album[]>(`${API_URL}/genres/${id}/albums`, HEADERS);
  }

  add(genre: Genre): Observable<Genre> {
    return this.http.post<Genre>(`${API_URL}/genres`, genre, HEADERS);
  }

  update(genre: Genre): Observable<Genre> {
    if (genre.id == null) {
      console.log('Update filed - Id undefinied');
      return;
    }

    return this.http.put<Genre>(`${API_URL}/genres/${genre.id}`, genre, HEADERS);
  }

  delete(id: number): void {
    this.http.delete<Genre>(`${API_URL}/custom/genres/${id}`, HEADERS).subscribe();
  }
}
