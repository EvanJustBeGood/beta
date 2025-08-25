
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import Hero from './components/Hero';
import BuildOptions from './components/BuildOptions';
import Features from './components/Features';
import PopularBuilds from './components/PopularBuilds';
import Modal from './components/Modal';
import LoginPage from './components/LoginPage';
import { useApp } from './context/AppContext';

function AppContent() {
  const { state, dispatch } = useApp();
  const { selectedBuild } = state;

  const handleCloseModal = () => {
    dispatch({ type: 'SET_SELECTED_BUILD', payload: null });
  };

  return (
    <>
      <Header />
      
      <Routes>
        <Route path="/" element={
          <main>
            <Hero />
            <BuildOptions />
            <Features />
            <PopularBuilds />
            
            <footer className="app-footer">
              <div className="container">
                <p className="footer-text">
                  Демо-проект на React + Vite + TypeScript
                </p>
              </div>
            </footer>
          </main>
        } />
        
        <Route path="/login" element={<LoginPage />} />
      </Routes>

      {selectedBuild && (
        <Modal
          build={selectedBuild}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
