import * as getTracks from './getTracks';
import * as getStream from './getStream';

export interface Response<Query extends string, Data> {
	data: Record<Query, Data[]>;
}

export { getTracks, getStream };
