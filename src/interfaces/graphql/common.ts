export interface Image {
    src: string;
    palette: string;
    paletteBottom: string | null;
}

export interface Label {
    id: string;
    title: string;
}

export interface Genre {
    id: string;
    name: string;
    shortName: string | null;
}
