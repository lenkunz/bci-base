import { setString } from "../../storage/setString";
import { storageAccessTokenKey } from "./const";

export function setAccessToken(token: string) {
    setString(storageAccessTokenKey, token);
}