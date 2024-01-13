import { parse } from 'graphql';

export const schema = parse(`
query getPlaylists($ids: [ID!]!) {
	playlists(ids: $ids) {
		id
		title
		searchTitle
		updated
		description
		branded
		coverV1 {
			src
		}
		childParam
		image {
			src
			palette
			paletteBottom
		}
		isPublic
		duration
		isDeleted
		userId
		shared
		chart {
			trackId
			positionChange
		}
		collectionLastModified
		tracks {
			id
			credits
			title
			searchTitle
			position
			duration
			availability
			artistTemplate
			condition
			explicit
			lyrics
			hasFlac
			zchan
			artists {
				id
				title
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
	}
}`);
