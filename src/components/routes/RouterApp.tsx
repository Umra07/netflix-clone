import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

const RouterApp = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Hello</div>} />
      <Route path="/test" element={<div>Nice</div>} />
    </Routes>
  );
};

export default RouterApp;
