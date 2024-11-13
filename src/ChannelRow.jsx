import React from 'react'
import './ChannelRow.css';
import { Avatar } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/CheckCircleOutlined';


function ChannelRow({ image,
    Channel,
    verified,
    subs,
    noOfVideos,
    description }) {
    return (
        <div className='channelRow'>
            <Avatar className='channelRow__logo' alt={Channel} src={image} />
            <div className='channelROw__text'>
                <h4>
                    {Channel} {verified &&<VerifiedIcon/>}
                </h4>
                <p>{subs} subscribers . {noOfVideos} videos</p>
                <p>{description}</p>

                

            </div>
        </div>
    )
}

export default ChannelRow
