import React, { useEffect, useState } from 'react';
import { getArtists } from '../services/api';

const Artists = () => {
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        const fetchArtists = async () => {
            try {
                const artistsData = await getArtists();
                setArtists(artistsData);
            } catch (error) {
                console.error('Error fetching artists:', error);
            }
        };

        fetchArtists();
    }, []);

    return (
        <div>
            <h1>Artists</h1>
            <ul>
                {artists.map(artist => (
                    <li key={artist._id}>{artist.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Artists;
