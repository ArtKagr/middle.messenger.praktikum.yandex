export function get(obj, path, defaultValue) {
    const keys = path.split('.');
    console.warn(keys)

    let result = obj;
    for (let key of keys) {
        result = result[key];

        if (result === undefined) {
            return defaultValue;
        }
    }

    return result ?? defaultValue;
}
