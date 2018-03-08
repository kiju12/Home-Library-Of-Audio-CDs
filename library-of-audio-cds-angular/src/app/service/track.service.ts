import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Track } from '../domain/track';
import { Album } from '../domain/album';
import { API_URL, HEADERS } from './apiconfig';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TrackService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Track[]> {
    return this.http.get<Track[]>(`${API_URL}/custom/tracks`, HEADERS);
  }

  getById(id: number): Observable<Track> {
    return this.http.get<Track>(`${API_URL}/custom/tracks/${id}`, HEADERS);
  }

  getAlbum(id: number): Observable<Album> {
    return this.http.get<Album>(`${API_URL}/custom/tracks/${id}/album`, HEADERS);
  }

  add(track: Track, albumId: number): Observable<Track> {
    return this.http.post<Track>(`${API_URL}/custom/albums/${albumId}/tracks`, track, HEADERS);
  }

  addAll(tracks: Track[], albumId: number): Observable<Track[]> {
    return this.http.post<Track[]>(`${API_URL}/custom/albums/${albumId}/tracksArray`, tracks, HEADERS);
  }

  update(track: Track): Observable<Track> {
    if (track.id == null) {
      console.log('Update filed - Id undefinied');
      return;
    }

    return this.http.put<Track>(`${API_URL}/custom/tracks/${track.id}`, track, HEADERS);
  }

  delete(id: number): void {
    this.http.delete<Track>(`${API_URL}/custom/tracks/${id}`, HEADERS).subscribe();
  }
}
