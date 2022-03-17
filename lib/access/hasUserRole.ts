import { hasAccessToken } from "./token/hasAccessToken";

export function hasUserRole(role: string) {
    if (!hasAccessToken()) {
        return false;
    }
    // TODO:
    return true;
}