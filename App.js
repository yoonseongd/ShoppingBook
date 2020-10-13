import React from 'react';
import MainStackNavigator from './src/navigation/AppNavigator';
import store from './src/redux/store';
import { Provider as StoreProvider } from 'react-redux';
export default function App() {
  return (
    <StoreProvider store={store}>
      <MainStackNavigator />
    </StoreProvider>
  );
}
