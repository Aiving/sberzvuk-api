import { parse } from 'graphql';

export const schema = parse(`
query getStream($ids: [ID!]!) {
	mediaContents(ids: $ids) {
        __typename
        
		... on Track {
			stream {
				expire
				expireDelta
				flacdrm
				high
				mid
			}
		}

		... on Episode {
			stream {
				expire
				expireDelta
				high
				mid
			}
		}

		... on Chapter {
			stream {
				expire
				expireDelta
				high
				mid
			}
		}
	}
}`);
