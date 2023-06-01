import styled from 'styled-components';
import globalToken from '../../tokens/global.json';
import { Icon } from './Icon';

const { borderRadius } = globalToken;

const ButtonContainer = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: ${borderRadius[8].value}px;
`;

const LabelText = styled.div`
  font-size: ${({ textSize }) => textSize}px;
`;

export const Button = ({ label = '', icon, textSize, ...rest }) => {
  return (
    <ButtonContainer {...rest}>
      {icon && <Icon icon={icon} />}
      <LabelText children={label} textSize={textSize} />
    </ButtonContainer>
  );
};
