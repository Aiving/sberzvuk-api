import { parse } from 'graphql';

export const schema = parse(`
query getReleases(
    $ids: [ID!]!
	$withTracks: Boolean = false
	$withArtists: Boolean = false
) {
    getReleases(ids: $ids) {
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
        tracks @include(if: $withTracks) {
            id
            title
            searchTitle
            duration
            position
            availability
            artistTemplate
            condition
            explicit
            lyrics
            hasFlac
            zchan

            stream {
                expire
                expireDelta
                flac
                flacdrm
                high
                mid
            }

            artists {
                id
                title
            }

            release {
                id
                title
                image {
                    palette
                    paletteBottom
                    src
                }
            }
        }
    }
}`);
