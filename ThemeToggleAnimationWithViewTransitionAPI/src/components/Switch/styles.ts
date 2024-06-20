import styled, { css } from "styled-components";

export const Container = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 25px;
  margin: 0 0.75rem;
`;

export const Checkbox = styled.input.attrs(() => ({
  type: "checkbox",
}))`
  display: none;
`;

export const PseudoSwitch = styled.span<{ checked: boolean }>`
  position: absolute;
  cursor: pointer;
  background-color: #b6b6b6;
  border-radius: 25px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: background-color 0.5s ease;

  &::before {
    position: absolute;
    content: "";
    left: 2px;
    top: 2px;
    width: 21px;
    height: 21px;
    border-radius: 50%;
    transition: transform 0.5s ease;
    background-color: #333;

    ${(props) =>
      props.checked &&
      css`
        transform: translateX(25px);
        background-color: #333;
      `}
  }
  background-color: ${(props) => (props.checked ? "#2bc6ff" : "#b6b6b6")};
`;
