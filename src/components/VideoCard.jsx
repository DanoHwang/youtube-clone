import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import globalToken from '../tokens/global.json';

const { Gray, Spacing } = globalToken;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

const Title = styled.h2`
  margin: ${Spacing[8].value}px 0;
`;

const Description = styled.p`
  margin-bottom: ${Spacing[4].value}px;
  color: ${Gray[600].value};
  font-size: 15px;
`;

export default function VideoCard({ video }) {
  const navigate = useNavigate();

  const handleVideoClick = () => {
    navigate(`/videos/watch/${video.id}`, {
      state: { videoData: video }
    });
  };

  return (
    <Wrapper onClick={handleVideoClick}>
      <img src={video.snippet.thumbnails.medium.url} alt='' />
      <Title>{video.snippet.title}</Title>
      <Description>{video.snippet.channelTitle}</Description>
      <Description>{video.snippet.publishedAt}</Description>
    </Wrapper>
  );
}

