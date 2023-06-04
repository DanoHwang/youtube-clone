import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/YoutubeApiContext';

import VideoCard from '../components/VideoCard';

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  const { isLoading, error, data: videos } = useQuery(
    ['videos', keyword],
    () =>  youtube.search(keyword),
    { staleTime: 1000 * 60 * 5 }
  );

  return (
    <div>
      {keyword ? keyword : 'hot trends'}
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong</p>}
      {videos && (
        <ul>
          {videos.map((video) => <VideoCard key={video.id} video={video} />)}
        </ul>
      )}
    </div>
  );
}

