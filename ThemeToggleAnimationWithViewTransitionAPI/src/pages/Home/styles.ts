import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background: ${({ theme }) => theme.pallete.background};
  transition: all 0.3s;
`;

export const Text = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.pallete.text};
  transition: all 0.3s;
`;
