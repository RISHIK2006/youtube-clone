import React from 'react';
import './RecommendedVideos.css';
import VideoCard from './VideoCard';

function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
            <div className="recommendedVideos__videos">
                <VideoCard
                    title="Deploying React Apps to Production"
                    views="480K Views"
                    timestamp="1 day ago"
                    channelImage='https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600'
                    channel="Web Dev Simplified"
                    image="https://images.pexels.com/photos/3584998/pexels-photo-3584998.jpeg?auto=compress&cs=tinysrgb&w=600"
                />
                <VideoCard
                    title="Understanding JavaScript Closures"
                    views="320K Views"
                    timestamp="3 days ago"
                    channelImage='https://images.pexels.com/photos/5063065/pexels-photo-5063065.jpeg?auto=compress&cs=tinysrgb&w=600'
                    channel="Tech with Tim"
                    image="https://images.pexels.com/photos/3760283/pexels-photo-3760283.jpeg?auto=compress&cs=tinysrgb&w=600"
                />
                <VideoCard
                    title="React vs Angular: Which Framework to Choose?"
                    views="250K Views"
                    timestamp="5 days ago"
                    channelImage='https://images.pexels.com/photos/3799127/pexels-photo-3799127.jpeg?auto=compress&cs=tinysrgb&w=600'
                    channel="Frontend Mentor"
                    image="https://images.pexels.com/photos/3739120/pexels-photo-3739120.jpeg?auto=compress&cs=tinysrgb&w=600"
                />
                <VideoCard
                    title="CSS Grid Tutorial: Build a Responsive Layout"
                    views="600K Views"
                    timestamp="1 week ago"
                    channelImage='https://images.pexels.com/photos/4050303/pexels-photo-4050303.jpeg?auto=compress&cs=tinysrgb&w=600'
                    channel="Web Dev Simplified"
                    image="https://images.pexels.com/photos/1750490/pexels-photo-1750490.jpeg?auto=compress&cs=tinysrgb&w=600"
                />
                <VideoCard
                    title="Mastering Python for Data Science"
                    views="1.2M Views"
                    timestamp="2 weeks ago"
                    channelImage='https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=600'
                    channel="Data School"
                    image="https://images.pexels.com/photos/3775507/pexels-photo-3775507.jpeg?auto=compress&cs=tinysrgb&w=600"
                />
            </div>
        </div>
    );
}

export default RecommendedVideos;
