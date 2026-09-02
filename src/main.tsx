import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./index.css"
import { BrowserRouter, Routes, Route } from "react-router";
import Login from './modules/Auth/index.tsx';
import Register from './modules/Auth/register.tsx';
import ForgotPassword from './modules/Auth/forget-password.tsx';
import Dashboard from './modules/dashboard/index.tsx';
import Discover from './modules/dashboard/tabs/discover.tsx';
import Feeds from './modules/dashboard/tabs/feeds.tsx';
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/test" element={<App />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/forget-password" element={<ForgotPassword />} />
        <Route path="/dashboard/discovery" element={<Discover />} />
        <Route path="/dashboard/feeds" element={<Feeds />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
