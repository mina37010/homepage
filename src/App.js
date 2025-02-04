import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopPage from './pages/TopPage';
import NotFound from './pages/NotFound';
import Party from './pages/Party';
import Iframe from './pages/Iframe';
import Layout from './Layout';
import { PartyProvider } from './PartyContext';


function App() {
  return (
    <Router>
      <PartyProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<TopPage />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/party" element={<Party />} />
            <Route path="/210on" element={<Iframe />} />
          </Routes>
        </Layout>
      </PartyProvider>
    </Router>
  );
}

export default App;
