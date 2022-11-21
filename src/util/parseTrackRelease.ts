import Label from '../interfaces/api/objects/Label';
import Release from '../interfaces/api/objects/Release';

export default function parseTrackRelease(
	release: Release,
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
		tracks: release.trackIds,
		labels: release.labelIds.map((labelId) => labels[labelId]),
	};
}
