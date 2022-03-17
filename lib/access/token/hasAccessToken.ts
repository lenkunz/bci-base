import { hasString } from "../../storage/hasString";
import { storageAccessTokenKey } from "./const";

export function hasAccessToken() {
    return hasString(storageAccessTokenKey);
}