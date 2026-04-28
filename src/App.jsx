import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Partner from './pages/Partner';
import SmoothScroll from './components/SmoothScroll';

export default function App() {
  return (
    <BrowserRouter>
      <SmoothScroll>
        <div className="noise-overlay" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/partner" element={<Partner />} />
        </Routes>
      </SmoothScroll>
    </BrowserRouter>
  );
}
