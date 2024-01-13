import { parse } from 'graphql';

export const schema = parse(`
query getSearch($query: String, $limit: Int, $searchSessionId: String) {
	quickSearch(query: $query, limit: $limit, searchSessionId: $searchSessionId) {
		searchSessionId
		content {
			__typename

			... on Track {
				id
				availability
				title
                artistTemplate
				artistNames
				release {
					image {
						src
                        palette
                        paletteBottom
                    }
				}
			}

			... on Artist {
				id
				title
				image {
					src
                    palette
                    paletteBottom
                }
				profile {
					id
				}
			}

			... on Release {
				id
				availability
				title
                artistTemplate
				artistNames
				date
				image {
					src
                    palette
                    paletteBottom
				}
			}

			... on Playlist {
				id
				isPublic
				title
				image {
					src
                    palette
                    paletteBottom
				}
				description
			}
		}
	}
}`);
