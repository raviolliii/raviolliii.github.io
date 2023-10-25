/**
 * Fetches the data from the given URL, as a string.
 * Returns null if data could not be fetched.
 */
export default async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            console.warn(response.status)
            throw new Error(`Exception occurred fetching data from URL: ${url}`);
        }
        const responseStr = await response.text();
        console.log(`Successfully fetched data from URL ${url}`);
        return responseStr;
    } catch (error) {
        console.error(error);
    }
    return null;
}
