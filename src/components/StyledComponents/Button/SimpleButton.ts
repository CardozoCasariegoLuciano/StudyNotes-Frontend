import styled from "styled-components";
import "../../../variables.scss";

export const SimpleButton = styled.button`
  color: var(--neutral_white);
  background-color: ${(p) =>
    !p.disabled ? "var(--secondary_color_300)" : "var(--grey_200)"};
  border: ${(p) =>
    !p.disabled
      ? "1px solid var(--secondary_color_500)"
      : "1px solid var(--grey_300)"};
  border-radius: 8px;
  padding: 5px 30px;
  font: var(--text_medium_small);
`;
