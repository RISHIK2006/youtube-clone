import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Header from './Header';
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchPage from './SearchPage';

function App() {
  return (
    <div className='app'>
      <Router>
        <Header />
        <Routes>
          <Route path='/search/:searchTerm' element={
            <div className='app__page'>
              <Sidebar />
              <SearchPage />
            </div>
          } />
          <Route
            path='/'
            element={
              <div className='app__page'>
                <Sidebar />
                <RecommendedVideos />
                
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
