import { Image } from './common';

export interface Artist {
    id: string;
    title: string;
    description: string;
    hasPage: boolean;
    image: Image | null;
    secondImage: Image | null;
}
