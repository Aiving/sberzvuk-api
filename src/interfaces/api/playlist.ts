import Artist from './objects/Artist';
import Label from './objects/Label';
import Name from './objects/Name';
import Playlist from './objects/Playlist';
import Release from './objects/Release';
import Track from './objects/Track';
import User from './objects/User';

export default interface Response {
	name: string;
	playlistId: number;
	playlistUserId: number;
	subscribersIds: number[];
	trackIds: number[];
	users: Record<number, User>;
	playlists: Record<number, Playlist>;
	releases: Record<number, Release>;
	labels: Record<number, Label>;
	tracks: Record<number, Track>;
	artists: Record<number, Artist>;
	names: Record<number, Name>;
}
