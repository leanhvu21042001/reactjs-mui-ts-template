import React from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { BrowserRouterWrapper } from './routes';
import { CssBaseline } from '@mui/material';

// Create a client
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      <BrowserRouterWrapper />
    </QueryClientProvider>
  );
};

export default App;
