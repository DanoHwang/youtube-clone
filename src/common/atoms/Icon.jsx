import styled from "styled-components";

const Image = styled.img.attrs(props => ({
  src: `${props.src}`,
  alt: ''
}))`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  color: ${({ color }) => color};
`;

export default function Icon({ size, src, color, ...rest }) {
  return (
    <Image
      size={size}
      src={src}
      color={color}
      { ...rest }
    />
  );
};
