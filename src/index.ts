import axios, { AxiosInstance, CreateAxiosDefaults } from 'axios';
import execute from './graphql/execute';
import { Operation } from './interfaces/graphql';

export enum Quality {
    High,
    Middle,
}

export class ZvukAPI {
    private token: string;
    private client: AxiosInstance;

    constructor(token: string, axiosOptions: CreateAxiosDefaults = {}) {
        if (typeof token !== 'string' || token.length === 0) throw new Error('A token is required but not provided!');

        this.token = token;
        this.client = axios.create({
            ...axiosOptions,
            headers: {
                'Content-Type': 'application/json',
                'X-Auth-Token': this.token,
            },
        });
    }

    static async getAnonymousToken() {
        const { data } = await axios.get<{ result: { id: number; is_anonymous: boolean; token: string } }>('https://zvuk.com/api/tiny/profile');

        return data.result.token;
    }

    async quickSearch(query: string, limit: number = 10) {
        const { data } = await execute(Operation.GetSearch, { query, limit }, this.client);

        return data.quickSearch.content;
    }

    async getStreamURL(trackId: number | number[], quality?: Quality) {
        const { data } = await execute(Operation.GetStream, { ids: Array.isArray(trackId) ? trackId : [trackId] }, this.client);

        return data.mediaContents.map(({ stream }) => {
            if (quality == Quality.High) {
                if (!stream.high) throw new ReferenceError("The high quality of the track is missing! Perhaps you don't have a subscription?");
                else return stream.high;
            } else if (quality == Quality.Middle) return stream.mid;
            else return stream.high ?? stream.mid;
        });
    }

    async getTrack(id: number | number[], withArtists: boolean = false, withAlbum: boolean = false) {
        const { data } = await execute(Operation.GetFullTrack, { withReleases: withAlbum, withArtists, ids: Array.isArray(id) ? id : [id] }, this.client);

        return data.getTracks;
    }

    async getPlaylist(id: number | number[]) {
        const { data } = await execute(Operation.GetPlaylists, { ids: Array.isArray(id) ? id : [id] }, this.client);

        return data.playlists;
    }

    async getAlbum(id: number, withArtists: boolean = false, withTracks: boolean = false) {
        const { data } = await execute(Operation.GetReleases, { withArtists, withTracks, ids: Array.isArray(id) ? id : [id] }, this.client);

        return data.getReleases;
    }
}
