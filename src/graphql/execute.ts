import { Operation, Response } from '../interfaces/graphql';

import { schema as getFullTrack } from './data/getFullTrack';
import { schema as getPlaylists } from './data/getPlaylists';
import { schema as getReleases } from './data/getReleases';
import { schema as getSearch } from './data/getSearch';
import { schema as getStream } from './data/getStream';
import { schema as getTracks } from './data/getTracks';

import { AxiosInstance } from 'axios';

export default function execute<K extends Operation>(operationName: K, variables: Record<string, any>, axios: AxiosInstance) {
    const query = Object.entries({
        getFullTrack,
        getPlaylists,
        getReleases,
        getSearch,
        getStream,
        getTracks,
    }).find(([name, _]) => name === operationName);

    if (!query) throw ReferenceError('Operation not found');

    return axios.post<Response<K>>('http://zvuk.com/api/v1/graphql', {
        operationName,
        variables,
        query: query[1].loc!.source.body,
    }).then((response) => response.data);
}
