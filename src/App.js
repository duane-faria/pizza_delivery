import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import Global from './styles/global';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastProvider } from 'react-toast-notifications';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ToastProvider>
          <BrowserRouter>
            <Global />
            <Routes />
          </BrowserRouter>
        </ToastProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
