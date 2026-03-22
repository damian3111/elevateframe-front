import './App.css'
import { Routes, Route } from "react-router-dom";
import TestApp from './b2cimages/TestApp';
import CheckoutPage from './b2cimages/pages/CheckoutPage';

export default function App() {

  return (
    <Routes>
      <Route path="/" element={<TestApp />} />
      <Route path="/checkout" element={<CheckoutPage />} />
    </Routes>
  );
}
