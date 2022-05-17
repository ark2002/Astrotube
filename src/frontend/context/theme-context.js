import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("THEME"));

  useEffect(() => {
    if (theme) {
      if (theme === "dark") {
        document.documentElement.className = theme;
      } else if (theme === "light") {
        document.documentElement.className = theme;
      }
    } else {
      setTheme("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };
