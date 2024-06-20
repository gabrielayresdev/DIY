import darkTheme from "../theme/darkTheme";
import lightTheme from "../theme/lightTheme";
import "styled-components";

declare module "styled-components" {
  type LightThemeType = typeof lightTheme;
  type DarkThemeType = typeof darkTheme;

  export interface DefaultTheme extends LightThemeType, DarkThemeType {}
}
