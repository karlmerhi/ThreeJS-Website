import React, { useState, useEffect } from 'react';

const AlbumInfo = ({ albumId }) => {
  const [albumDetails, setAlbumDetails] = useState(null);

  useEffect(() => {
    const fetchAlbumDetails = async () => {
      try {
        const response = await fetch(`/api/spotify/artist-albums/${albumId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setAlbumDetails(data);
      } catch (error) {
        console.error("Failed to fetch album details:", error);
      }
    };

    if (albumId) {
      fetchAlbumDetails();
    }
  }, [albumId]);

  if (!albumDetails) {
    return <div>Loading album details...</div>;
  }

  return (
    <div>
      <h2>{albumDetails.name}</h2>
      {/* Render other album details as needed */}
    </div>
  );
};

export default AlbumInfo;
