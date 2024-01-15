import { Artist } from './artist';
import { Image, Genre, Label } from './common';
import { Track } from './track';

export interface Album {
    id: string;
    title: string;
    type: 'album';
    date: string;
    image: Image;
    genres: Genre[];
    label: Label;
    availability: number;
    artistTemplate: string;
    artists?: Artist[];
    tracks?: Track[];
}