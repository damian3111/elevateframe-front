import './App.css'
import { Routes, Route } from "react-router-dom";
import TestApp from './b2cimages/TestApp';

export default function App() {

  return (
    <Routes>
      <Route path="/" element={<TestApp />} />
    </Routes>
  );
}
