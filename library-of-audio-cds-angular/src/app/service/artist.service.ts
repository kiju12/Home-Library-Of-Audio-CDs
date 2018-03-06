import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Artist } from '../domain/artist';
import { Track } from '../domain/track';
import { HttpClient } from '@angular/common/http';
import { API_URL, HEADERS } from './apiconfig';

@Injectable()
export class ArtistService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Artist[]> {
    return this.http.get<Artist[]>(`${API_URL}/artists`, HEADERS);
  }

  getById(id: number): Observable<Artist> {
    return this.http.get<Artist>(`${API_URL}/artists/${id}`, HEADERS);
  }

  getDiscography(id: number): Observable<Track[]> {
    return this.http.get<Track[]>(`${API_URL}/artists/${id}/discography`, HEADERS);
  }

  add(artist: Artist): Observable<Artist> {
    return this.http.post<Artist>(`${API_URL}/artists`, artist, HEADERS);
  }

  update(artist: Artist): Observable<Artist> {
    if (artist.id == null) {
      console.log('Update filed - Id undefinied');
      return;
    }

    return this.http.put<Artist>(`${API_URL}/artists/${artist.id}`, artist, HEADERS);
  }

  delete(id: number): void {
    this.http.delete<Artist>(`${API_URL}/artists/${id}`, HEADERS).subscribe();
  }
}
