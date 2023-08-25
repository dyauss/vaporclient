import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

//Pages
import Root from './pages/root/root';
// import ErrorPage from "./pages/error/Error";
import Home from './pages/home/Home';

//Components
import { Navbar } from './shared/components/navbar/Navbar';

export default function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
)
}