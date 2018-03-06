import { Artist } from './artist';
import { Track } from './track';
import { Genre } from './genre';

export class Album {
    id: number;
    name: String;
    length: number;
    numberOfSongs: number;
    artist: Artist;
    trackList: Track[];
    genre: Genre;

    constructor(artist: Artist, name: String, numberOfSongs: number, length: number, genre: Genre) {
        this.artist = artist;
        this.name = name;
        this.numberOfSongs = numberOfSongs;
        this.length = length;
        this.genre = genre;
        this.trackList = [];
    }
}
