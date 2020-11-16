import * as React from "react";

const ThemeContext = React.createContext();

const gradient = {
  blue: {
    from: "teal",
    to: "blue",
  },
  orange: {
    from: "yellow",
    to: "orange",
  },
  pink: {
    from: "fuchsia",
    to: "pink",
  },
  purple: {
    from: "fuchsia",
    to: "purple",
  }
};

gradient.teal = gradient.blue;
gradient.yellow = gradient.orange;

export const getGradientByColor = (color) => {
  return gradient[color];
};

export function ThemeProvider({ children }) {
  const [color, setColor] = React.useState("blue");

  const handleChangeColor = React.useCallback(
    (newColor) => {
      setColor(newColor);
    },
    [setColor]
  );

  return (
    <ThemeContext.Provider value={{ color, handleChangeColor }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return React.useContext(ThemeContext);
}
