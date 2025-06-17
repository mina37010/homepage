import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopPage from './pages/TopPage';
import NotFound from './pages/NotFound';
import Party from './pages/Party';
import Iframe from './pages/Iframe';
import Shinratsu from './pages/shinratsu';
import DVD from './pages/DVD';
import Gallery3D from './pages/Gallery3D';
import Nowlisten from './pages/nowlisten';

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
            <Route path="/inaniwa" element={<Iframe />} />
            <Route path="/nimoca" element={<Iframe />} />
            <Route path="/maroyaka" element={<Iframe />} />
            <Route path="/churu" element={<Iframe />} />
            <Route path="/link" element={<Iframe />} />
            <Route path="/shinratsu" element={<Shinratsu />} />
            <Route path="/DVD" element={<DVD />} />
            <Route path="/Gallery3D" element={<Gallery3D />} />
            <Route path="/nowlisten" element={<Nowlisten />} />
          </Routes>
        </Layout>
      </PartyProvider>
    </Router>
  );
}

export default App;
