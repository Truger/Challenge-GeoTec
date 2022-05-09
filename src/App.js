import React from 'react';
import { Route, Routes, } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import SearchResult from './components/SearchResult';
import ProductDetail from './components/ProductDetail';
import NotFound from './components/NotFound';
import './App.css';

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<SearchBar />} />
        <Route path='/items' element={<SearchResult />} />
        <Route path='/items/:id' element={<><SearchBar /><ProductDetail /></>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
