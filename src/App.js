import React, { useState, useContext, createContext } from 'react';
import './App.css';

// Création d'un Context pour le thème
const ThemeContext = createContext();

function ThemeButton() {
  // Utiliser le contexte ici
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      Je suis un bouton stylisé par le thème !
    </button>
  );
}

function App() {
  // Utilisation du hook useState pour gérer le thème
  const [theme, setTheme] = useState({
    foreground: "#ffffff",
    background: "#222222"
  });

  return (
    <ThemeContext.Provider value={theme}>
      <div className="App">
        <header className="App-header">
          <ThemeButton />
          <button onClick={() => setTheme({
            foreground: "#000000",
            background: "#eeeeee"
          })}>
            Changer de thème
          </button>
        </header>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
