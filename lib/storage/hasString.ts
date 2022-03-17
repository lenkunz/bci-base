export function hasString(key: string) {
    return localStorage?.getItem !== undefined;
}