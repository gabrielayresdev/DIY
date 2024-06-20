import Switch from "../../components/Switch";
import { useColorTheme } from "../../contexts/ColorThemeContext";
import { Container, Text } from "./styles";

const Home = () => {
  const { theme, toggleTheme, ref } = useColorTheme();
  return (
    <Container>
      <div ref={ref}>
        <Switch isOn={theme} onSwitch={toggleTheme} />
      </div>
      <Text>Gabriel Ayres</Text>
    </Container>
  );
};

export default Home;
