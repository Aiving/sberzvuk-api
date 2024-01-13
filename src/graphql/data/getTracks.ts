import { parse } from 'graphql';

export const schema = parse(`
query getTracks($ids: [ID!]!) {
	getTracks(ids: $ids) {
		id
		title
		searchTitle
		position
		duration
		availability
		artistTemplate
		condition
		explicit
		lyrics
		zchan
		hasFlac
		artists {
			id
			title
			image {
				src
				palette
				paletteBottom
			}
		}
		release {
			id
			title
			image {
				src
				palette
				paletteBottom
			}
		}
	}
}`);
