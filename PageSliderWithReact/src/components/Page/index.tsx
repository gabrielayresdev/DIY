import { Container } from "./styles";

type Props = {
  color: string;
};

const Page = ({ color }: Props) => {
  return <Container color={color} />;
};

export default Page;
