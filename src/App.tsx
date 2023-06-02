import './App.css';
import RootLayout from "./layouts/RootLayout";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { TwoFer } from "./exercism/TwoFer";
import React from "react";
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import LeapYearCalendar from './components/Calendar';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path='TwoFer' element={<TwoFer />} />
      <Route path='Leap' element={<LeapYearCalendar />} />
    </Route>
  )
);

function fallbackRender({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div>
      <h2>Something went wrong:</h2>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}


function App() {
  return (
    <ErrorBoundary fallbackRender={fallbackRender}>
      <RouterProvider router={router}></RouterProvider>
    </ErrorBoundary>
  );
}

export default App;
