// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from './pages/Registration';
import OrganizationSetup from './pages/OrganizationSetup';
import Integration from './pages/Integration';
import Verification from './pages/Verification';
import Success from './pages/Success';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/verify" element={<Verification />} />
        <Route path="/setup" element={<OrganizationSetup />} />
        <Route path="/integration" element={<Integration />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}