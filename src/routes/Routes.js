import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
// import { Auth, Todo } from '../pages';
// import { getAccessToken } from '../utils';
import { LoginPage, TodoPage } from '../page/index';

const Router = () => {
  //   const isToken = getAccessToken();

  const routes = useRoutes([
    {
      path: '/',
      element: <LoginPage />,
    },
    {
      path: '/todo',
      element: <TodoPage />,
    },
  ]);
  return routes;
};

export default Router;
