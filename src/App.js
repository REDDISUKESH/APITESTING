import React, { useState } from 'react';
import { Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Home from './Components/Home';
import Contact from './Components/Contact';
import PostDetail from './Components/PostDetail';
import './App.css';

function App() {
  // State for search query
  const [searchQuery, setSearchQuery] = useState('');

  // State for dark mode
  const [darkMode, setDarkMode] = useState(false);

  // Create theme based on dark mode state
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}> {/* Apply MUI theme */}
      <CssBaseline /> {/* Normalize CSS */}
      <> {/* React Fragment */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} /> {/* Navbar component */}
        <Routes> {/* Router configuration */}
          <Route path="/" element={<Home searchQuery={searchQuery} setSearchQuery={setSearchQuery} />} /> {/* Home route */}
          <Route path="/about" element={<About />} /> {/* About route */}
          <Route path="/contact" element={<Contact />} /> {/* Contact route */}
          <Route path="/post/:id" element={<PostDetail />} /> {/* PostDetail route */}
        </Routes>
      </> {/* End of React Fragment */}
    </ThemeProvider>
  );
}

export default App;
