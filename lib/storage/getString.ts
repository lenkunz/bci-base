export function getString(key: string) {
    return localStorage?.getItem(key);
}