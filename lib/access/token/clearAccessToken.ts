import { clearString } from "../../storage/clearString";
import { storageAccessTokenKey } from "./const";

export function clearAccessToken() {
    clearString(storageAccessTokenKey);
}