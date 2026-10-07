import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AuthorizationAPI from './api/AuthorizationAPI';
import LoginPage from './pages/LoginPage';
import ApplicationsPage from './pages/ApplicationsPage';
import './App.css';

export default function App() {
  const [currentUser, setCurrentUser] = useState(() => AuthorizationAPI.getCurrentUser());

  const handleLogin = ({ login, password }) => {
    const user = AuthorizationAPI.login(login, password);

    if (!user) return false;

    setCurrentUser(user);
    return true;
  };

  const handleLogout = () => {
    AuthorizationAPI.logout();
    setCurrentUser(null);
  };

  return (
    <div className="app">
      {currentUser && (
        <header className="app-header">
          <span className="app-header__user">
            {currentUser.fullName} ({currentUser.role})
          </span>
          <button className="btn-delete" type="button" onClick={handleLogout}>
            Выйти
          </button>
        </header>
      )}

      <Routes>
        <Route
          path="/login"
          element={currentUser ? <Navigate to="/" replace /> : <LoginPage onLogin={handleLogin} />}
        />
        <Route
          path="/"
          element={currentUser ? <ApplicationsPage /> : <Navigate to="/login" replace />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}