import styled from 'styled-components';
import '../../../variables.scss';

export const CheckBox = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  height: 20px;
  width: 20px;
  border: 2px solid #ccc;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  position: relative;

  &:checked {
    background-color: var(--secondary_color_500);
    border: 1px solid var(--secondary_color_500);
  }

  &:checked::before {
    content: "✓";
    font-size: 20px;
    color: white;
    position: absolute;
    top: -3px;
    left: 1px;
  }
`;
