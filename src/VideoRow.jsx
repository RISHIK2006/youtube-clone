import React from 'react';
import './VideoRow.css';

function VideoRow({ views, subs, description, timestamp, channel, title, image }) {
  return (
    <div className='videoRow'>
        <img className='videoRow__thumbnail' src={image} alt={title} />
        <div className="videoRow__text">
            <h3 className='videoRow__title'>{title}</h3>
            <p className='videoRow__headline'>
                {channel} •
                <span className='videoRow__subs'>
                    <span className='videoRow__subsNumber'>{subs} </span>Subscribers
                </span> 
                • {views} views • {timestamp}
            </p>
            <p className='videoRow__description'>{description}</p> {}
        </div>
    </div>
  );
}

export default VideoRow;
