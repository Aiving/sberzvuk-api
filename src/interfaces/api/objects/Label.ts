import Image from './Image';

export default interface Label {
	id: number;
	name: string;
	description: string | null;
	image: Image;
}
