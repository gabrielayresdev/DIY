import styled from "styled-components";
import "./App.css";
import Card from "./components/Card";
import usePagination from "./hooks/usePagination";

function App() {
  const { page, goNext } = usePagination(30 / 6);
  const arr = Array.from({ length: 33 }, (_, index) => index);
  return (
    <>
      <Container>
        {arr.slice(0, (page + 1) * 6).map(() => (
          <Card />
        ))}
      </Container>
      <button onClick={goNext}>Next</button>
    </>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem;
`;
