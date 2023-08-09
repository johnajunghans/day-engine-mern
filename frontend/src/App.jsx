import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import RootLayout from './layouts/root-layout/RootLayout';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route>

        </Route>
      </Route>
    )
  );
  
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  )

}

export default App
