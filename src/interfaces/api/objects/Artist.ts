import Image from './Image';

export default interface Artist {
	id: number;
	name: string;
	image: Image;
	hasPage: boolean;
}
