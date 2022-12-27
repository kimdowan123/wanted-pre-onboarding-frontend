import './App.css';
import { Navigate, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LoginPage from './page/login/LoginPage';
import TodoPage from './page/todo/TodoPage';

function App() {
  const [token, setToken] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('access_token')) {
      setToken(false);
    }
  });

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={token ? <LoginPage /> : <Navigate to="/todo" />}
        />
        <Route
          path="/todo"
          element={token ? <Navigate to="/" /> : <TodoPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
