import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  position: fixed;
  top: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled(motion.div)`
  background: #fff;

  max-width: 80%;

  z-index: 100;

  padding: 0.5rem;
  border-radius: 1rem;
  border: 1px solid #ddd;

  opacity: 0.5;
`;
