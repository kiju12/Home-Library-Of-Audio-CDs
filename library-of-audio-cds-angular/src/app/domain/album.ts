import { Artist } from './artist';
import { Track } from './track';
import { Genre } from './genre';

export class Album {
    id: number;
    name: String;
    lengthMin: number;
    lengthSec: number;
    numberOfSongs: number;
    artist: Artist;
    trackList: Track[];
    genre: Genre;

    constructor(artist: Artist, name: String, numberOfSongs: number, lengthMin: number, lengthSec: number, genre: Genre) {
        this.artist = artist;
        this.name = name;
        this.numberOfSongs = numberOfSongs;
        this.lengthMin = lengthMin;
        this.lengthSec = lengthSec;
        this.genre = genre;
        this.trackList = [];
    }

}
