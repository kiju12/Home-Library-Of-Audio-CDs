import { Album } from './album';

export class Artist {
    id: number;
    name: String;
    discography: Album[];

    constructor(name: String) {
        this.name = name;
        this.discography = [];
    }
}
