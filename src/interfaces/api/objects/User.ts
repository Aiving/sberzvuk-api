import Gender from './Gender';
import Image from './Image';

export default interface User {
	id: number;
	username: string;
	name: string;
	avatar: Image;
	gender: Gender;
	age: number | null;
	registered: string | null;
	location: {
		latlng: number | null;
		name: string;
	} | null;
	site: string;
	allow_explicit: boolean;
	isRegistered: boolean;
	hideBirthday: boolean;
	isSuspended: boolean;
	libraryPlaylistCount: number;
	libraryReleaseCount: number;
}
