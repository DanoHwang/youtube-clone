import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';

import App from './App';
import NotFound from './pages/NotFound';
import Videos from './pages/Videos';
import VideoDetail from './pages/VideoDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {index: true, element: <Videos />}, // 인덱스가 최상위인 경우
      {path: 'videos', element: <Videos />}, // 사용자가 명시적으로 videos라고 한 경우
      {path: 'videos/:keyword', element: <Videos />}, // videos 안에 키워드 param이 들어온 경우
      {path: 'videos/watch/:videoId', element: <VideoDetail />}
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
