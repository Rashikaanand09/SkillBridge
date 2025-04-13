import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchVideos } from "./youtubeApi.jsx";  
import '../components/CourseVideo.css';

const CourseVideoPage = () => {
    const { courseTitle } = useParams(); // Get course title from URL
    const [videos, setVideos] = useState([]);
    const [suggestedVideos, setSuggestedVideos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAllVideos = async () => {
            try {
                // Fetch videos for the selected course
                const videos = await fetchVideos(courseTitle);
                setVideos(videos);
                // Fetch suggested videos based on the course
                const suggested = await fetchVideos(courseTitle + " tutorial");
                setSuggestedVideos(suggested);
            } catch (error) {
                console.error("Error fetching videos:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAllVideos();
    }, [courseTitle]);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="course-video-page">
            <h2 className="course-title">Videos for {courseTitle}</h2>

            {/* Main course videos */}
            <div className="video-list main-videos">
                {videos.map((video) => (
                    <div key={video.id.videoId} className="video-item">
                        <a
                            href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={video.snippet.thumbnails.medium.url}
                                alt={video.snippet.title}
                                className="video-thumbnail"
                            />
                            <p>{video.snippet.title}</p>
                        </a>
                    </div>
                ))}
            </div>

            {/* Suggested Videos Section */}
            <div className="suggested-videos">
                <h3>Suggested Videos</h3>
                <div className="video-list">
                    {suggestedVideos.map((video) => (
                        <div key={video.id.videoId} className="video-item">
                            <a
                                href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={video.snippet.thumbnails.medium.url}
                                    alt={video.snippet.title}
                                    className="video-thumbnail"
                                />
                                <p>{video.snippet.title}</p>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CourseVideoPage;
