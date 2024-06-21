import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  overflow-x: hidden;
  display: block;
`;

export const Slider = styled.div<{ page: number }>`
  display: flex;
  flex-direction: row;
  position: relative;
  top: 0;
  left: ${({ page }) => `-${page * 100}vw`};
  flex-direction: row;
  transition: all 0.3s;
`;
