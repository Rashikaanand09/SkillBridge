// youtubeAPI.jsx
import axios from "axios";

const API_KEY = "AIzaSyCiCvmIRK_iLrF5MTxvWK-XJPcAjS3PMpU";
const BASE_URL = "https://www.googleapis.com/youtube/v3/search";

export const fetchVideos = async (query) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                part: "snippet",
                maxResults: 15, // You can adjust this number
                q: query, // Search query based on the course name
                key: API_KEY,
            },
        });
        return response.data.items; // Return the list of videos
    } catch (error) {
        console.error("Error fetching videos: ", error);
        return [];
    }
};
