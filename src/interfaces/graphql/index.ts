import { Stream } from './stream';
import { Playlist } from './playlist';
import { Track } from './track';
import { Artist } from './artist';
import { Album } from './album';
import { Image } from './common';

export enum Operation {
    GetFullTrack = 'getFullTrack',
    GetPlaylists = 'getPlaylists',
    GetReleases = 'getReleases',
    GetSearch = 'getSearch',
    GetStream = 'getStream',
    GetTracks = 'getTracks',
}

interface Name {
    [Operation.GetFullTrack]: 'getTracks';
    [Operation.GetPlaylists]: 'playlists';
    [Operation.GetReleases]: 'getReleases';
    [Operation.GetSearch]: 'quickSearch';
    [Operation.GetStream]: 'mediaContents';
    [Operation.GetTracks]: 'getTracks';
}

interface Data {
    [Operation.GetFullTrack]: Track[];
    [Operation.GetPlaylists]: Playlist[];
    [Operation.GetReleases]: Album[];
    [Operation.GetSearch]: {
        content: (
            | {
                  __typename: 'Track';
                  id: string;
                  availability: number;
                  title: string;
                  artistTemplate: string;
                  artistNames: string[];
                  release: Pick<Album, 'image'>;
              }
            | {
                  __typename: 'Artist';
                  id: string;
                  title: string;
                  image: Image;
              }
            | {
                  __typename: 'Release';
                  id: string;
                  availability: number;
                  title: string;
                  artistTemplate: string;
                  artistNames: string[];
                  date: string;
                  image: Image;
              }
            | {
                  __typename: 'Playlist';
                  id: string;
                  isPublic: boolean;
                  title: string;
                  image: Image;
                  description: string;
              }
        )[];
    };
    [Operation.GetStream]: Stream[];
    [Operation.GetTracks]: (Omit<Track, 'genres' | 'artists' | 'release'> & {
        artists: Pick<Artist, 'id' | 'title' | 'image'>[];
        release: Pick<Album, 'id' | 'title' | 'image'>;
    })[];
}

export interface Response<K extends Operation> {
    data: Record<Name[K], Data[K]>;
}
