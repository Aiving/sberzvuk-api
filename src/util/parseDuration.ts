export default function parseDuration(duration: number) {
	return {
		milliseconds: duration * 1000,
		seconds: duration,
		minutes: duration / 60,
		hours: duration / 60 / 60,
	};
}
