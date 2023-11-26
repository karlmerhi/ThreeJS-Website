
import React, { useState, useEffect } from 'react';
import AlbumInfo from './AlbumInfo'; // Import the AlbumInfo component

const ArtistAlbum = () => {
  const [artistAlbums, setArtistAlbums] = useState([]);
  const [selectedAlbumId, setSelectedAlbumId] = useState(null); // State for selected album ID

  useEffect(() => {
    const fetchSpotifyData = async () => {
      try {
        const response = await fetch("/api/spotify/artist-albums");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data && data.items) {
          setArtistAlbums(data.items);
        } else {
          console.error('Unexpected response structure:', data);
        }
      } catch (error) {
        console.error("Failed to fetch Spotify data:", error);
      }
    };

    fetchSpotifyData();
  }, []);

  const handleAlbumClick = (albumId) => {
    setSelectedAlbumId(albumId);
  };

  return (
    <div>
      {artistAlbums.length > 0 ? (
        <ul>
          {artistAlbums.map((album, index) => (
            <li key={index} onClick={() => handleAlbumClick(album.id)}>
              {album.name} - {album.artists[0].name}
            </li>
          ))}
        </ul>
      ) : (
        <div>Loading artist albums...</div>
      )}
      <AlbumInfo albumId={selectedAlbumId} /> {/* Render AlbumInfo with the selected album ID */}
    </div>
  );
};

export default ArtistAlbum;

