import { parse } from 'graphql';

export const schema = parse(`
query getFullTrack(
	$ids: [ID!]!
	$withReleases: Boolean = false
	$withArtists: Boolean = false
) {
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
        genres {
            id
            name
            shortName
        }
		collectionItemData {
			itemStatus
		}
		artists @include(if: $withArtists) {
			id
			title
			searchTitle
			description
			hasPage
			image {
				src
				palette
				paletteBottom
			}
			secondImage {
				src
				palette
				paletteBottom
			}
			animation {
				artistId
				effect
				image
				background {
					type
					image
					color
					gradient
				}
			}
		}
		release @include(if: $withReleases) {
			id
			title
			searchTitle
			type
			date
			image {
				src
				palette
				paletteBottom
			}
			genres {
				id
				name
				shortName
			}
			label {
				id
				title
			}
			availability
			artistTemplate
		}
		hasFlac
	}
}`);
