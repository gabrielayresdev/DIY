// src/ColorThemeContext.js
import React from "react";
import { flushSync } from "react-dom";

type Theme = {
  theme: "light" | "dark";
  toggleTheme: () => void;
  ref: React.RefObject<HTMLDivElement>;
};

const ColorThemeContext = React.createContext<Theme | null>(null);

export const ColorThemeProvider = ({ children }: React.PropsWithChildren) => {
  const [theme, setTheme] = React.useState<"light" | "dark">("light");
  const ref = React.useRef<HTMLDivElement>(null);

  const toggleTheme = async () => {
    if ("startViewTransition" in document) {
      await document.startViewTransition(() => {
        flushSync(() => {
          setTheme(theme === "light" ? "dark" : "light");
        });
      }).ready;

      if (!ref.current) return;

      const { top, left } = ref.current.getBoundingClientRect();
      const x = left + ref.current.offsetWidth / 2;
      const y = top;

      const right = window.innerWidth - left;
      const bottom = window.innerHeight - top;

      const maxRadius = Math.hypot(
        Math.max(left, right),
        Math.max(top, bottom)
      );

      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${maxRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 500,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    } else {
      setTheme(theme === "light" ? "dark" : "light");
    }
  };

  return (
    <ColorThemeContext.Provider value={{ theme, toggleTheme, ref }}>
      {children}
    </ColorThemeContext.Provider>
  );
};

export const useColorTheme = () => {
  const context = React.useContext(ColorThemeContext);
  if (!context)
    throw new Error("ColorThemeContext must be used inside provider");
  return context;
};
