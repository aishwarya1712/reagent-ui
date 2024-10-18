import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './components/main/ResponsiveAppBar';
import {  ThemeProvider } from '@mui/material/styles';
import Home from './components/main/Home';
import About from './components/main/About';
import NotFound from './components/main/NotFound';
import theme from './themes/default';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
