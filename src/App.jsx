import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext.jsx';
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import ScrollManager from './components/layout/ScrollManager.jsx';
import Home from './pages/Home.jsx';

// Route-level code splitting keeps the first paint fast
const Projects = lazy(() => import('./pages/Projects.jsx'));
const CaseStudy = lazy(() => import('./pages/CaseStudy.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

function PageFallback() {
  return (
    <div className="grid min-h-[60vh] place-items-center pt-24" role="status" aria-label="Loading">
      <span className="h-8 w-8 animate-spin rounded-full border-2 border-border border-t-accent-600" />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <ScrollManager />
        <Navbar />
        <div id="main-content">
          <Suspense fallback={<PageFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/work/:slug" element={<CaseStudy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}
