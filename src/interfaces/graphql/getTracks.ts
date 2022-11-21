export interface Track {
	id: string;
	title: string;
	searchTitle: string;
	position: number;
	duration: number;
	availability: number;
	artistTemplate: string;
	condition: string;
	explicit: boolean;
	lyrics: boolean;
	zchan: string;
	collectionItemData: {
		itemStatus: any | null;
	};
	hasFlac: boolean;
}

export interface Artist {
	id: string;
	title: string;
	searchTitle: string;
	description: null;
	hasPage: boolean;
	image: Image;
	secondImage: Image;
	animation: Record<string, any> | null;
}

export interface Release {
	id: string;
	title: string;
	searchTitle: string;
	type: string;
	date: string;
	image: Image;
	genres: Genre[];
	label: Label;
	availability: number;
	artistTemplate: string;
}

export interface Label {
	id: string;
	title: string;
}

export interface Image {
	src: string;
	palette: string | null;
	paletteBottom: string | null;
	w?: number;
	h?: number;
}

export interface Genre {
	id: string;
	name: string;
	shortName: null;
}
