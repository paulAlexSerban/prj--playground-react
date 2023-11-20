export async function get<T>(url: string) {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error(
            JSON.stringify({
                status: response.status,
                statusText: response.statusText,
                message: 'Failed to fetch data from the server.',
            })
        );
    }
    // using unknown here will force the caller to cast the return value to the expected type
    const data = (await response.json()) as unknown;
    return data as T;
}
