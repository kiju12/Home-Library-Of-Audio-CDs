import { Album } from './album';

export class Track {
    id: number;
    name: string;
    producerName: string;
    lengthMin: number;
    lengthSec: number;
    album: Album;

    constructor(album: Album, name: string, producerName: string, lengthMin: number, lengthSec: number) {
        this.album = album;
        this.name = name;
        this.producerName = producerName;
        this.lengthMin = lengthMin;
        this.lengthSec = lengthSec;
    }
}
