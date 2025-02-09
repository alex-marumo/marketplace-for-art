import React from 'react';

const artworks = [
  { id: 1, title: "Sunset Bliss", category: "Painting" },
  { id: 2, title: "Modern Sculpture", category: "Sculpture" },
  { id: 3, title: "Urban Photography", category: "Photography" },
  // Add more artwork data
];

const RecommendedArtworks = ({ preferences }) => {
  const filteredArtworks = artworks.filter((artwork) =>
    preferences.includes(artwork.category)
  );

  return (
    <div>
      {filteredArtworks.map((artwork) => (
        <div key={artwork.id}>
          <h3>{artwork.title}</h3>
          <p>{artwork.category}</p>
        </div>
      ))}
    </div>
  );
};

export default RecommendedArtworks;
