import React from 'react';
import styled from 'styled-components';
import logoIcon from '../assets/youtube-icon.svg';
import globalToken from '../tokens/global.json';

import Button from '../common/atoms/Button';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

const { Heading, White, iconSize } = globalToken;

const Container = styled.div`
  display: flex;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
`;

const Text = styled.div`
  color: ${White.value};
  font-size: ${Heading.fontSize.value}px;
  font-weight: bold;
`;

export default function Header() {
  return (
    <Container>
      <Link to='/'>
        <LogoWrapper>
          <Button icon={logoIcon} size={iconSize.medium.value} />
          <Text>Youtube</Text>
        </LogoWrapper>
      </Link>
      <SearchBar />
    </Container>
  );
}
