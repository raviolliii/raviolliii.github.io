/**
 * Transforms the given string into a formatted JSON string.
 * Returns null if JSON conversion fails.
 */
function transformToJson(value) {
    try {
        return JSON.stringify(JSON.parse(value), null, 2);
    } catch (error) {
        console.error('Fetched data cannot be converted to JSON for code preview. '
            + 'Returning null');
        return null;
    }
}

/**
 * Transforms the given string into a formatted string.
 */
function transformToString(value) {
    // no real formatting/string modification needed
    return value;
}


export { transformToJson, transformToString };
