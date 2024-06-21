import styled from "styled-components";

export const Container = styled.div<{ color: string }>`
  min-width: 100%;
  height: 100vh;
  background: ${({ color }) => color};
  display: block;
`;
