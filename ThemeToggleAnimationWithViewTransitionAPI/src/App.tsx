import { ThemeProvider } from "styled-components";
import Home from "./pages/Home";
import lightTheme from "./theme/lightTheme";
import darkTheme from "./theme/darkTheme";
import { useColorTheme } from "./contexts/ColorThemeContext";

function App() {
  const { theme } = useColorTheme();
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
