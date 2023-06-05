import React from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import globalToken from '../tokens/global.json';
import { useYoutubeApi } from '../context/YoutubeApiContext';

import Icon from '../common/atoms/Icon';

const { Spacing, iconSize } = globalToken;

const TextWrapper = styled.div`
  padding: 2rem;
`;

const Title = styled.h2`
  margin-bottom: ${Spacing[16].value}px;
  font-size: 20px;
  font-weight: bold;
`;

const PublisherWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${Spacing[24].value}px;
`;

const Publisher = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const PublisherThumbnail = styled(Icon)`
  margin-right: ${Spacing[8].value}px;
  border-radius: 50%;
`;

const Description = styled.pre`
  font-size: 15px;
`;

export default function VideoDetail() {
  const location = useLocation();
  const video = location.state.videoData;

  const { youtube } = useYoutubeApi();
  const { isLoading, error, data: channel } = useQuery(
    ['channel', video.snippet.channelId],
    () => youtube.getChannel(video.snippet.channelId),
    { staleTime: 1000 * 60 * 5 }
  );

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong</p>}
      <iframe
        id={video.id}
        type="text/html"
        width="100%"
        height="640"
        src={`http://www.youtube.com/embed/${video.id}`}
        frameBorder="0"
      />
      <TextWrapper>
        <Title>{video.snippet.title}</Title>
        <PublisherWrapper>
          {channel && (
            <PublisherThumbnail
              src={channel[0].snippet.thumbnails.default.url}
              alt=''
              size={iconSize.medium.value}
            />
          )}
          <Publisher>{video.snippet.channelTitle}</Publisher>
        </PublisherWrapper>
        <Description>{video.snippet.description}</Description>
      </TextWrapper>
    </div>
  );
}

