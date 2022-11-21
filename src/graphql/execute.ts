import * as graphql from './data/queries.json';
import axios, { AxiosResponse } from 'axios';

export default function execute<T>(
	operationName: string,
	variables: Record<string, any>,
	token: string
): Promise<AxiosResponse<T>> {
	const query = Object.entries(graphql).find(
		([name, _]) => name === operationName
	);
	if (!query) throw ReferenceError('Operation not found');

	return axios.post<T>(
		'https://zvuk.com/api/v1/graphql',
		{
			operationName,
			variables,
			query: query[1],
		},
		{
			headers: {
				'Content-Type': 'application/json',
				'x-auth-token': token,
			},
		}
	);
}
