import * as graphql from './data/queries.json';
import { AxiosStatic, AxiosResponse, AxiosInstance } from 'axios';
const axios = require('axios') as AxiosStatic;

interface ExecuteOptions {
	token: string;
	axiosInstance?: AxiosInstance;
}

export default function execute<T>(
	operationName: string,
	variables: Record<string, any>,
	options: ExecuteOptions
): Promise<AxiosResponse<T>> {
	const query = Object.entries(graphql).find(
		([name, _]) => name === operationName
	);
	if (!query) throw ReferenceError('Operation not found');

	return (options.axiosInstance ?? axios).post<T>(
		'http://zvuk.com/api/v1/graphql',
		{
			operationName,
			variables,
			query: query[1],
		},
		options.axiosInstance
			? {
					headers: {
						'Content-Type': 'application/json',
						'x-auth-token': options.token,
					},
			  }
			: {}
	);
}
