import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/layout/layout';
import Home from './pages/home/home';
const Consultants = React.lazy(() => import('./pages/consultants/consultants'));
const ConsultantDetail = React.lazy(() => import('./pages/consultants/detail'));
const Contact = React.lazy(() => import('./pages/contact/contact'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="consultants" element={<Consultants />} />
            <Route path="consultants/:id" element={<ConsultantDetail />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </React.Suspense>
    </Router>
  );
}

export default App;
