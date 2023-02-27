import styled from "styled-components";
import "../../../variables.scss";

export const Input = styled.input`
  border: none;
  background: transparent;
  width: 100%;
  outline: none;
  color: var(--grey_800);
  font: var(--text_medium_small);

  &::placeholder {
    color: var(--grey_400);
    font: var(--text_medium_small);
  }
`;
