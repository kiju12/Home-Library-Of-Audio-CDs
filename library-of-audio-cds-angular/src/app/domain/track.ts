import { Album } from './album';

export class Track {
    id: number;
    name: string;
    producerName: string;
    length: number;
    album: Album;

    constructor(album: Album, name: string, producerName: string, length: number) {
        this.album = album;
        this.name = name;
        this.producerName = producerName;
        this.length = length;
    }
}
