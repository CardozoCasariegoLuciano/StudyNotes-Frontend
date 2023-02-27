import styled from "styled-components";
import "../../../variables.scss";

export const InputContainer = styled.label`
  padding: 10px;
  border-width: var(--input_border-width);
  border-style: solid;
  border-color: var(--grey_100);
  border-radius: var(--input_border-radius);
  background: transparent;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
`;

