import { Artist } from './artist';
import { Image } from './common';
import { Release } from './release';
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
        release: Pick<Release, 'id' | 'title' | 'image'>;
    })[];
}
