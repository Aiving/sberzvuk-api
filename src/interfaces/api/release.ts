import Artist from './objects/Artist';
import Label from './objects/Label';
import Name from './objects/Name';
import Release from './objects/Release';
import Track from './objects/Track';
import User from './objects/User';

export default interface Response {
	releaseId: number;
	haveInLibraryUserCount: number;
	haveInLibraryUserIds: number[];
	users: Record<number, User>;
	releases: Record<number, Release>;
	releaseIds: number[];
	releaseCount: number;
	labels: Record<number, Label>;
	tracks: Record<number, Track>;
	artists: Record<number, Artist>;
	names: Record<number, Name>;
}
