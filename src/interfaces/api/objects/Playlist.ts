import Image from './Image';

export default interface Playlist {
	id: number;
	userId: number;
	name: string;
	description: string | null;
	image: Image;
	date: string;
	duration: number;
	isPublic: boolean;
	isDeleted: boolean;
	isFavorite: boolean;
	subscribersCount: number;
	trackCount: number;
	trackIds: number[];
	contributors: any[];
	invited: any[];
}
