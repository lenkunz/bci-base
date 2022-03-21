export function hasString(key: string) {
    return localStorage?.getItem(key) !== undefined;
}
