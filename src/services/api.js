import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3001/api'
});

export const getArtists = async () => {
    const response = await api.get('/artists');
    return response.data;
};
