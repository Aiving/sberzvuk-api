export default function parseDuration(duration: number) {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    const hours = Math.floor(minutes / 60);

    return {
        seconds,
        minutes: minutes % 60,
        hours,
    };
}
