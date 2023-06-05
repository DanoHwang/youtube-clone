import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import globalToken from '../tokens/global.json';

import VideoCard from '../components/VideoCard';

const { Spacing } = globalToken;

const Wrapper = styled.ul`
  display: grid;
  gap: ${Spacing[8].value}px;

  @media screen and (min-width: 640px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  @media screen and (min-width: 1536px) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
`;

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  const { isLoading, error, data: videos } = useQuery(
    ['videos', keyword],
    () =>  youtube.search(keyword),
    { staleTime: 1000 * 60 * 1 }
  );

  return (
    <div>
      {keyword ? keyword : 'hot trends'}
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong</p>}
      {videos && (
        <Wrapper>
          {videos.map((video) => <VideoCard key={video.id} video={video} />)}
        </Wrapper>
      )}
    </div>
  );
}

