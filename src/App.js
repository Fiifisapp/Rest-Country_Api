//imports below
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, Globalstyles } from "./themes";
import Navigation from "./components/navigation/Navigation";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    mode === "light" ? setMode("dark") : setMode("light");
  };
  return (
    <ThemeProvider theme={mode === "light" ? lightTheme: darkTheme}>
      <Globalstyles/>
      <Router>
        <Navigation toggleMode={toggleMode}/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
