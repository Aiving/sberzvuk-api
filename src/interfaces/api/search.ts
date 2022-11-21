import Artist from './objects/Artist';
import Count from './objects/Count';
import Label from './objects/Label';
import Name from './objects/Name';
import Release from './objects/Release';
import Track from './objects/Track';

export default interface Response {
	hasMoreBeyond: boolean;
	hasNextPage: boolean;
	releases: Record<number, Release>;
	releaseIds: number[];
	releaseCount: Count;
	labels: Record<number, Label>;
	labelIds: number[];
	labelCount: Count;
	tracks: Record<number, Track>;
	trackIds: number[];
	trackCount: Count;
	artists: Record<number, Artist>;
	artistIds: number[];
	artistCount: Count;
	names: Record<number, Name>;
}
