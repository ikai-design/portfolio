import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import { SiteLayout } from './components/site/SiteLayout';

/* Eager primary nav pages — avoids Suspense skeleton flash on About/Contact */
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const Advisory = lazy(() => import('./pages/Advisory'));
const PortfolioCaseStudy = lazy(() => import('./pages/PortfolioCaseStudy'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/advisory" element={<Advisory />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/:slug" element={<PortfolioCaseStudy />} />
          <Route path="/projects" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
