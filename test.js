const lib = require('./lib');
const token = 'kyZyXdYc7KxFhqUSL3OA7CAJhaDMjAYa';
const api = new lib.ZvukAPI(token);

async function main() {
    const response = await require('./lib/graphql/execute').default(
        'search',
        {
            query: 'pyro',
        },
        {
            token,
            axiosInstance: api.client,
        }
    );

    console.log(response.data.data.quickSearch.content);
}

void main();
