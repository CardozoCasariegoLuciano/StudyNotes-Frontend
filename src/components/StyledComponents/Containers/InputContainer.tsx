import styled from 'styled-components';
import '../../../variables.scss';

interface InputContainer {
  error?: boolean;
  spaceBetween?: boolean;
}

export const InputContainer = styled.label<InputContainer>`
  padding: 10px;
  border-width: var(--input_border-width);
  border-style: solid;
  border-color: ${(props) =>
    !props.error ? 'var(--grey_100)' : 'var(--main_color_700)'};
  border-radius: var(--input_border-radius);
  background: transparent;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.spaceBetween ? 'space-between' : 'start'};
  gap: 10px;
`;
