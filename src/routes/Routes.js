import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import { getToken } from '../utils/token';
import { LoginPage, TodoPage } from '../page/index';

const Router = () => {
  const isToken = getToken();
  
  const routes = useRoutes([
    {
      path: '/',
      element: isToken ? <Navigate replace to="/todo" /> : <LoginPage />,
    },
    {
      path: '/todo',
      element: isToken ? <TodoPage /> : <Navigate replace to="/" />,
    },
  ]);
  return routes;
};

export default Router;
