import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./global.scss";
import ErrorBoundary from './components/error-boundary/ErrorBoundary';

const HomePage = lazy(() => import('./features/home-page/HomePage'));

const App: React.FC = () => {
  return (
    <Router>
      {/* Bọc toàn bộ ứng dụng với ErrorBoundary */}
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
};

export default App;
