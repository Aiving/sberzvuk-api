export interface Stream {
    stream: {
        expire: string;
        expireDelta: number;
        high: string | null;
        mid: string;
    };
}
