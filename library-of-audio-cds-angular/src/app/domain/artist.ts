import { Album } from './album';

export class Artist {
    id: number;
    name: string;
    discography: Album[];

    constructor(name: string) {
        this.name = name;
        this.discography = [];
    }
}
