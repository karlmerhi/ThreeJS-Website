import express from 'express';
import cors from 'cors';
import SpotifyWebApi from 'spotify-web-api-node';

const app = express();
app.use(cors()); // Enable CORS
const port = 3001;

// Configure Spotify API
const spotifyApi = new SpotifyWebApi({
  clientId: '01df9f956de14eb69696997e75eae50f',
  clientSecret: '98c42c151c5c456dadbaa90c4709d613',
  redirectUri: 'http://localhost:3000/callback' // Adjust as needed
});

// Route to get artist albums
app.get('/api/spotify/artist-albums', async (req, res) => {
  try {
    const data = await spotifyApi.clientCredentialsGrant();
    spotifyApi.setAccessToken(data.body['access_token']);

    const artistAlbums = await spotifyApi.getArtistAlbums('3TVXtAsR1Inumwj472S9r4'); // Example: Drake's Spotify Artist ID
    res.json(artistAlbums.body);
  } catch (err) {
    console.error('Something went wrong!', err);
    res.status(500).send('Internal Server Error');
  }
});

// Route to get new releases
app.get('/api/spotify/new-releases', async (req, res) => {
  try {
      const data = await spotifyApi.clientCredentialsGrant();
      spotifyApi.setAccessToken(data.body['access_token']);

      const newReleases = await spotifyApi.getNewReleases({ limit: 5, offset: 0, country: 'SE' });
      res.json(newReleases.body);
  } catch (err) {
      console.error('Something went wrong!', err);
      res.status(500).send('Internal Server Error');
  }
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
