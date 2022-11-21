import execute from './graphql/execute';
import { playlist, release, search } from './interfaces/api';
import { getStream, getTracks, Response } from './interfaces/graphql';
import { parseRelease, parseTrack } from './util';
import { AxiosStatic } from 'axios';
const axios = require('axios') as AxiosStatic;

export class ZvukAPI {
	private token: string;

	constructor(token: string) {
		if (typeof token !== 'string' || token.length === 0)
			throw new Error('Token is required, but not provided!');
		this.token = token;
	}

	async search(query: string) {
		const {
			data: { result },
		} = await axios.get<Record<'result', search>>(
			'https://zvuk.com/api/search',
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
		>('getStream', { ids: [trackId] }, this.token);

		const { stream } = response.data.mediaContents[0];

		return stream.high ?? stream.mid;
	}

	async getTrack(id: number) {
		const { data: response } = await execute<
			Response<'getTracks', getTracks.Track>
		>(
			'getTracks',
			{ withReleases: true, withArtists: true, ids: [id] },
			this.token
		);

		return response.data.getTracks[0];
	}

	async getPlaylist(id: number) {
		const {
			data: { result },
		} = await axios.get<Record<'result', playlist>>(
			`https://zvuk.com/api/playlist/${id}`
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
		} = await axios.get<Record<'result', release>>(
			`https://zvuk.com/api/playlist/${id}`
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
