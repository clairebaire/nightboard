export interface SpotifyAuth {
    isAuthorized: boolean;
    expiryTime: Date;
    authToken: string;
}