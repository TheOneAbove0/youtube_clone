import React from 'react'
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';
import Loader from './Loader';



export default function Videos({videos}) {
  // console.log(videos);
  if(!videos?.length) return <Loader />;

  return(
    <div className=' flex flex-wrap gap-2 justify-start ' >
      {videos.map((item, index) => {
      return (
          <div key={index}>
             {item.id.videoId && <VideoCard video={item} /> }
          {item.id.channelId && <ChannelCard channelDetail={item} />}
          </div>
      )
      })}


    </div>
  )
    
  
}
