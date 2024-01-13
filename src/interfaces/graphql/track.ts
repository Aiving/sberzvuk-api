import { Genre } from './common';
import { Artist } from './artist';
import { Release } from './release';

export interface Track {
    id: string;
    title: string;
    genres: Genre[];
    position: number;
    duration: number;
    availability: number;
    artistTemplate: string;
    explicit: boolean;
    lyrics: boolean | null;
    artists?: Artist[];
    release?: Omit<Release, "artists" | "tracks">;
}
