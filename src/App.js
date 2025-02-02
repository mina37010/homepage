import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopPage from './pages/TopPage';
import NotFound from './pages/NotFound';
import Layout from './Layout';
import { PartyProvider } from './PartyContext';

function App() {
  return (
    <PartyProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<TopPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </PartyProvider>
  );
}

export default App;
