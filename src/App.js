import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

//Pages
import Root from './pages/root/root';
// import ErrorPage from "./pages/error/Error";
import Home from './pages/home/Home';

//Components

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}