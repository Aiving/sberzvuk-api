import execute from './graphql/execute';
import { playlist, release, search } from './interfaces/api';
import { getStream, getTracks, Response } from './interfaces/graphql';
import { parseRelease, parseTrack } from './util';
import * as util from './util';
import { AxiosInstance, AxiosProxyConfig, AxiosStatic } from 'axios';
const axios = require('axios') as AxiosStatic;

interface ZvukOptions {
	proxy?: AxiosProxyConfig | false;
}

export const graphql = { execute };
export { util };

export class ZvukAPI {
	private token: string;
	private client: AxiosInstance;

	constructor(token: string, options: ZvukOptions = {}) {
		if (typeof token !== 'string' || token.length === 0)
			throw new Error('Token is required, but not provided!');
		this.token = token;
		this.client = axios.create({
			...options,
			headers: {
				'Content-Type': 'application/json',
				'x-auth-token': this.token,
			},
		});
	}

	async search(query: string) {
		const {
			data: { result },
		} = await this.client.get<Record<'result', search>>(
			'http://zvuk.com/api/search',
			{ params: { query } }
		);

		return {
			artists: result.artistIds.map((artistId) => result.artists[artistId]),
			tracks: result.trackIds
				.map((trackId) => result.tracks[trackId])
				.map((track) =>
					parseTrack(track, result.names, result.releases, result.labels)
				),
			albums: result.releaseIds
				.map((releaseId) => result.releases[releaseId])
				.map((release) =>
					parseRelease(
						release,
						result.releases,
						result.tracks,
						result.names,
						result.labels
					)
				),
		};
	}

	async getStreamURL(trackId: number) {
		const { data: response } = await execute<
			Response<'mediaContents', Record<'stream', getStream.Stream>>
		>(
			'getStream',
			{ ids: [trackId] },
			{ token: this.token, axiosInstance: this.client }
		);

		const { stream } = response.data.mediaContents[0];

		return stream.high ?? stream.mid;
	}

	async getTrack(id: number) {
		const { data: response } = await execute<
			Response<'getTracks', getTracks.Track>
		>(
			'getTracks',
			{ withReleases: true, withArtists: true, ids: [id] },
			{ token: this.token, axiosInstance: this.client }
		);

		return response.data.getTracks[0];
	}

	async getPlaylist(id: number) {
		const {
			data: { result },
		} = await this.client.get<Record<'result', playlist>>(
			`http://zvuk.com/api/playlist/${id}`
		);

		return {
			author: result.users[result.playlistUserId],
			information: result.playlists[result.playlistId],
			tracks: result.trackIds
				.map((trackId) => result.tracks[trackId])
				.map((track) =>
					parseTrack(track, result.names, result.releases, result.labels)
				),
		};
	}

	async getAlbum(id: number) {
		const {
			data: { result },
		} = await this.client.get<Record<'result', release>>(
			`http://zvuk.com/api/release/${id}`
		);

		const release = result.releases[result.releaseId];
		return parseRelease(
			release,
			result.releases,
			result.tracks,
			result.names,
			result.labels
		);
	}
}
