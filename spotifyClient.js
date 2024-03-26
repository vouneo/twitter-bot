const SpotifyWebApi = require("@spotify/web-api-ts-sdk");
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET; 
const redirectUri = "https://localhost:3050/callback";


(async () => {

    console.log("Searching Spotify for The Beatles...");

    const api = SpotifyWebApi.withClientCredentials(
        clientId,
        clientSecret,
        redirectUri
    );

    const items = await api.search("The Beatles", ["artist"]);

    console.table(items.artists.items.map((item) => ({
        name: item.name,
        followers: item.followers.total,
        popularity: item.popularity,
    })));

})();
