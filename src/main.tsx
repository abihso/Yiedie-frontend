import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./index.css"
import { BrowserRouter, Routes, Route } from "react-router";
import Login from './modules/Auth/index.tsx';
import Register from './modules/Auth/register.tsx';
import ForgotPassword from './modules/Auth/forget-password.tsx';
import Dashboard from './modules/dashboard/index.tsx';
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/test" element={<App />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/forget-password" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
