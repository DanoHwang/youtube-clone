import styled from "styled-components";

const Image = styled.img.attrs(props => ({
  src: `${props.name}`,
  alt: ''
}))`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  color: ${({ color }) => color};
`;

export const Icon = ({ size, name, color, ...rest }) => {
  return (
    <Image
      size={size}
      name={name}
      color={color}
      { ...rest }
    />
  );
};
