import styled from "styled-components";
import globalToken from '../tokens/global.json';

const { Black, White } = globalToken;

const Wrapper = styled.input`
  width: 100%;
  padding: 0 1rem;
  color: ${White.value};
  background-color: ${Black.value};
`;

export default function Input({ form, onChange, name, placeholder }) {
  return (
    <Wrapper
      name={name}
      value={form[name]}
      onChange={onChange}
      type="text"
      placeholder={placeholder || ''}
    />
  );
}
