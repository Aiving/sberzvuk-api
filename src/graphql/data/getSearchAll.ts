import { parse } from 'graphql';

export const schema = parse(`
query getSearchAll(
    $query: String
    $limit: Int = 2
    $trackCursor: Cursor = null
    $artistsCursor: Cursor = null
    $releasesCursor: Cursor = null
    $profilesCursor: Cursor = null
    $playlistsCursor: Cursor = null
    $episodesCursor: Cursor = null
    $booksCursor: Cursor = null
    $bookAuthorsCursor: Cursor = null
    $podcastsCursor: Cursor = null
    $tracks: Boolean = true
    $artists: Boolean = true
    $releases: Boolean = true
    $playlists: Boolean = true
    $profiles: Boolean = true
    $books: Boolean = true
    $bookAuthors: Boolean = true
    $episodes: Boolean = true
    $podcasts: Boolean = true
    $categories: Boolean = true
) {
    search(query: $query) {
        searchId
        tracks(limit: $limit, cursor: $trackCursor) @include(if: $tracks) {
            page {
                total
                prev
                next
                cursor
            }
            score
            items {
                id
                title
                availability
                explicit
                artistTemplate
                artists {
                    id
                    title
                }
                zchan
                availability
                condition
                duration
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
        artists(limit: $limit, cursor: $artistsCursor) @include(if: $artists) {
            page {
                total
                prev
                next
                cursor
            }
            score
            items {
                id
                title
                searchTitle
                description
                image {
                    src
                    palette
                    paletteBottom
                }
                profile {
                    id
                }
            }
        }
        releases(limit: $limit, cursor: $releasesCursor) @include(if: $releases) {
            page {
                total
                prev
                next
                cursor
            }
            score
            items {
                id
                title
                searchTitle
                explicit
                availability
                date
                artists {
                    id
                    title
                }
                image {
                    src
                    palette
                    paletteBottom
                }
            }
        }
        playlists(limit: $limit, cursor: $playlistsCursor) @include(if: $playlists) {
            page {
                total
                prev
                next
                cursor
            }
            score
            items {
                id
                title
                isPublic
                description
                duration
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
                image {
                    src
                    palette
                    paletteBottom
                }
            }
        }
        profiles(limit: $limit, cursor: $profilesCursor) @include(if: $profiles) {
            page {
                total
                prev
                next
                cursor
            }
            score
            items {
                id
                name
                description
                image {
                    src
                }
            }
        }
        books(limit: $limit, cursor: $booksCursor) @include(if: $books) {
            page {
                total
                prev
                next
                cursor
            }
            score
            items {
                id
                title
                bookAuthors {
                    id
                    rname
                }
                image {
                    src
                }
            }
        }
        bookAuthors(limit: $limit, cursor: $bookAuthorsCursor) @include(if: $bookAuthors) {
            page {
                total
                prev
                next
                cursor
            }
            score
            items {
                id
                rname
                image {
                    src
                }
            }
        }
        episodes(limit: $limit, cursor: $episodesCursor) @include(if: $episodes) {
            page {
                total
                prev
                next
                cursor
            }
            score
            items {
                id
                title
                availability
                explicit
                duration
                publicationDate
                image {
                    src
                    palette
                    paletteBottom
                }
                podcast {
                    id
                    authors {
                        id
                        name
                    }
                    image {
                        src
                        palette
                        paletteBottom
                    }
                }
            }
        }
        podcasts(limit: $limit, cursor: $podcastsCursor) @include(if: $podcasts) {
            page {
                total
                prev
                next
                cursor
            }
            score
            items {
                id
                title
                explicit
                availability
                authors {
                    name
                }
                image {
                    src
                    palette
                    paletteBottom
                }
            }
        }
        categories(limit: 1) @include(if: $categories) {
            score
            items {
                id
                title
                description
                image {
                    src
                }
                webAction {
                    name
                    data {
                        url
                    }
                }
            }
        }
    }
}`);
