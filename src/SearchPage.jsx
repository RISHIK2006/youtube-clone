import React from 'react'
import './SearchPage.css'
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>Filter</h2>
            </div>
            <hr />
            <ChannelRow
                image="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600"
                Channel="Web Dev Simplified"
                verified={true}
                subs="1.2M"
                noOfVideos={520}
                description="Learn web development from scratch with clear explanations, easy-to-follow tutorials, and project-based lessons."
            />
            <hr />
            <VideoRow
                views="1.2M"
                subs="500K"
                description="In this tutorial, we will learn how to build a responsive website from scratch using HTML, CSS, and JavaScript."
                timestamp="2 days ago"
                channel="Web Development Academy"
                title="Build a Responsive Website from Scratch"
                image="https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&w=600"
            />

            <VideoRow
                views="750K"
                subs="300K"
                description="Discover the latest trends in front-end development and how to apply them in your projects."
                timestamp="5 days ago"
                channel="Tech Talk"
                title="Front-End Development Trends 2024"
                image="https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg?auto=compress&cs=tinysrgb&w=600"
            />

            <VideoRow
                views="980K"
                subs="250K"
                description="Join us for a deep dive into React, the popular JavaScript library for building user interfaces."
                timestamp="1 week ago"
                channel="React Mastery"
                title="Understanding React Hooks"
                image="https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=600"
            />

            <VideoRow
                views="2.3M"
                subs="1.2M"
                description="Learn how to create stunning animations with CSS and JavaScript."
                timestamp="3 weeks ago"
                channel="Design Guru"
                title="CSS Animations: A Beginner's Guide"
                image="https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
        </div>
    )
}

export default SearchPage

