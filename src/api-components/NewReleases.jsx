import React, { useState, useEffect } from "react";

const NewReleases = () => {
  const [newReleases, setNewReleases] = useState([]);

  useEffect(() => {
    fetch("/api/spotify/new-releases")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Accessing the items under albums
        if (data && data.albums && data.albums.items) {
          setNewReleases(data.albums.items);
        } else {
          // Handle the case where 'items' is not defined
          console.error("Unexpected response structure:", data);
        }
      })
      .catch((err) => console.error("Something went wrong!", err));
  }, []);

  return (
    <div>
      {newReleases.length > 0 ? (
        <ul>
          {newReleases.map((release, index) => (
            <li key={index}>
              {/* Display release details here */}
              {release.name} - {release.artists[0].name}
            </li>
          ))}
        </ul>
      ) : (
        <div>Loading new releases...</div>
      )}
    </div>
  );
};

export default NewReleases;
