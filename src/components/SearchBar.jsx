import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import searchIcon from '../assets/search-icon.svg';
import globalToken from '../tokens/global.json';

import useInput from "../hooks/useInput";
import Button from '../common/atoms/Button';
import Input from '../common/Input';

const { Gray, iconSize } = globalToken;

const SearchBarWrapper = styled.form`
  display: flex;
  justify-content: center;
  width: 700px;
  height: 2.5rem;
`;

export default function SearchBar() {
  const navigate = useNavigate();
  const [form, onChange, reset] = useInput({
    searchValue: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    reset();
    navigate(`/videos/${form.searchValue}`);
  };

  return (
    <SearchBarWrapper onSubmit={handleSubmit}>
      <Input
        form={form}
        name='searchValue'
        onChange={onChange}
        placeholder='Search...'
      />
      <Button
        onClick={handleSubmit}
        icon={searchIcon}
        size={iconSize.small.value}
        backgroundColor={Gray[700].value}
      />
    </SearchBarWrapper>
  );
}
