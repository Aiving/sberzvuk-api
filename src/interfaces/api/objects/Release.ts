import Image from './Image';

export default interface Release {
	id: number;
	name: string;
	type: 'single' | 'album';
	availability: number;
	date: number;
	price: number;
	image: Image;
	artist: string;
	artistNames: number[];
	genreIds: number[];
	labelIds: number[];
	trackIds: number[];
}
