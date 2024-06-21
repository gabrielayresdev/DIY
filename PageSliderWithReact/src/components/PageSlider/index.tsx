import { Container, Slider } from "./styles";

type Props = {
  page: number;
} & React.PropsWithChildren;

const PageSlider = ({ children, page }: Props) => {
  return (
    <Container>
      <Slider page={page}>{children}</Slider>
    </Container>
  );
};

export default PageSlider;
