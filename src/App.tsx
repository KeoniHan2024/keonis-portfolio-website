import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import './css/global.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const existingFavicon = document.getElementById('favicon');
    if (!existingFavicon) return;

    const updateFavicon = (prefersDark: boolean) => {
      const newFavicon = document.createElement('link');
      newFavicon.rel = 'icon';
      newFavicon.type = 'image/svg+xml'; // Adjust the type if you're using a different format

      if (prefersDark) {
        newFavicon.href = '/keoni-logo-dark.svg';
      } else {
        newFavicon.href = '/keoni-logo-light.svg';
      }

      // Replace the existing favicon element with the new one
      existingFavicon.parentNode?.replaceChild(newFavicon, existingFavicon);
      // Optionally, update the ID of the new element if needed for future targeting
      newFavicon.id = 'favicon';
    };

    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    updateFavicon(prefersDarkScheme.matches);

    const changeHandler = (event: MediaQueryListEvent) => {
      updateFavicon(event.matches);
    };
    prefersDarkScheme.addEventListener('change', changeHandler);

    return () => {
      prefersDarkScheme.removeEventListener('change', changeHandler);
    };
  }, []);

  return (
    <div>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;