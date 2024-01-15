import { Artist } from './artist';
import { Image } from './common';
import { Album } from './album';
import { Track } from './track';

export interface Playlist {
    id: string;
    userId: string;
    title: string;
    description: string;
    image: Image;
    updated: string;
    duration: number;
    branded: boolean;
    shared: boolean;
    isPublic: boolean;
    isDeleted: boolean;
    tracks: (Omit<Track, 'genres' | 'artists' | 'release'> & {
        artists: Pick<Artist, 'id' | 'title' | 'image'>[];
        release: Pick<Album, 'id' | 'title' | 'image'>;
    })[];
}
