import Label from '../interfaces/api/objects/Label';
import Name from '../interfaces/api/objects/Name';
import Release from '../interfaces/api/objects/Release';
import Track from '../interfaces/api/objects/Track';
import parseDuration from './parseDuration';
import parseTrackRelease from './parseTrackRelease';

export default function parseTrack(
	track: Track,
	names: Record<number, Name>,
	releases: Record<number, Release>,
	labels: Record<number, Label>
) {
	const regex = /{(?<id>\d+)}/gm;

	return {
		id: track.id,
		name: track.name,
		price: track.price,
		duration: parseDuration(track.duration),
		availability: track.availability,
		artist: track.artist.replace(
			regex,
			(_, id: string) => names[parseInt(id)].value
		),
		album: parseTrackRelease(releases[track.releaseId], labels),
		position: track.position,
	};
}
