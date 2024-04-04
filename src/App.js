import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Post from './pages/Post';
import Contact from './pages/Contact';
import About from './pages/About';
import Layout from './pages/Layout';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Index />}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path='contact' element={<Contact />}></Route>
          <Route path='post' element={<Post />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
