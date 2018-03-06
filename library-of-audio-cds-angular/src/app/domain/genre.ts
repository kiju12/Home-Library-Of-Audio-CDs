import { Album } from './album';

export class Genre {
    id: number;
    name: string;
    albums: Album[];

    constructor(name: string) {
        this.name = name;
        this.albums = [];
    }
}
