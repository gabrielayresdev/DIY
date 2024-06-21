import Page from "./components/Page";
import PageSlider from "./components/PageSlider";
import usePagination from "./hooks/usePagination";
import "./App.css";

export default function App() {
  const { page, goNext } = usePagination(4);
  const colors = ["#9aa8e6", "#d38334", "#4e9e10", "#a6520a"];

  return (
    <div
      onClick={() => {
        goNext();
      }}
    >
      <PageSlider page={page}>
        {colors.map((color) => {
          return <Page color={color} />;
        })}
      </PageSlider>
    </div>
  );
}
