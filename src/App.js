import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import CreateCustomPage from './Page/CreateCustomPage/CreateCustomPage';
import PageList from './Page/BusList/PageList';
import SingleBus from './Page/SingleBus/SingleBus';
import UpdateBus from './Page/UpdateBus/UpdateBus';
import BusImagePage from './Page/BusImage/BusImagePage';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/create-custom-page" element={<PrivateRoute><CreateCustomPage /></PrivateRoute>} />
          <Route path="/page-list" element={<PrivateRoute><PageList /></PrivateRoute>} />
          <Route path="/single-bus/:id" element={<PrivateRoute><SingleBus /></PrivateRoute>} />
          <Route path="/update-bus/:id" element={<PrivateRoute><UpdateBus /></PrivateRoute>} />
          <Route path="/bus-image-page" element={<PrivateRoute><BusImagePage /></PrivateRoute>} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
