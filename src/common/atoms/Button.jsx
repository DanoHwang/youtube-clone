import styled from 'styled-components';

import Icon from './Icon';

const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  border: none;
  border-radius: ${({border}) => border}px;
  outline: none;
  background-color: ${({backgroundColor}) => backgroundColor || 'transparent'};
  cursor: pointer;
`;

const LabelText = styled.div`
  font-size: ${({ textSize }) => textSize}px;
`;

export default function Button({ handleOnClick, icon, size, label, textSize, ...rest }) {
  return (
    <ButtonContainer onClick={handleOnClick} size={size} {...rest}>
      {icon && <Icon src={icon} size={size} />}
      {label && <LabelText children={label} textSize={textSize} />}
    </ButtonContainer>
  );
};
