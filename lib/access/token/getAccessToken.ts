import { getString } from "../../storage/getString";
import { storageAccessTokenKey } from "./const";

export function getAccessToken() {
    return getString(storageAccessTokenKey);
}