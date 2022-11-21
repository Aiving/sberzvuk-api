import Label from '../interfaces/api/objects/Label';
import Name from '../interfaces/api/objects/Name';
import Release from '../interfaces/api/objects/Release';
import Track from '../interfaces/api/objects/Track';
import parseTrack from './parseTrack';

export default function parseRelease(
	release: Release,
	releases: Record<number, Release>,
	tracks: Record<number, Track>,
	names: Record<number, Name>,
	labels: Record<number, Label>
) {
	const dateRegex = /(?<year>\d{0,4})(?<month>\d{0,2})(?<day>\d{0,2})/;
	const releaseDate = dateRegex
		.exec(release.date.toString())!
		.map((val) => parseInt(val));

	return {
		id: release.id,
		name: release.name,
		image: release.image,
		releaseDate: new Date(releaseDate[1], releaseDate[2], releaseDate[3]),
		type: release.type,
		genres: release.genreIds,
		tracks: release.trackIds
			.map((trackId) => tracks[trackId])
			.map((track) => parseTrack(track, names, releases, labels)),
		labels: release.labelIds.map((labelId) => labels[labelId]),
	};
}
