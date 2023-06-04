import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import searchIcon from '../assets/search-icon.svg';
import globalToken from '../tokens/global.json';

import useInput from "../hooks/useInput";
import Button from '../common/atoms/Button';
import Input from '../common/Input';

const { Gray, iconSize } = globalToken;

const Wrapper = styled.form`
  display: flex;
  justify-content: center;
  width: ${100 * 7 / 12}%;
  height: 2.5rem;
`;

export default function SearchBar() {
  const navigate = useNavigate();
  const { keyword } = useParams();
  const [form, onChange, reset] = useInput({
    searchValue: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${form.searchValue}`);
  };

  useEffect(() => {
    const text = keyword || '';
    reset({ ...form, searchValue: text });
  }, [keyword]);

  return (
    <Wrapper onSubmit={handleSubmit}>
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
    </Wrapper>
  );
}
