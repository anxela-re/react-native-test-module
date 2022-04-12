import React from 'react';
import Toast from './Toast';
import type { Provider } from './typings';

const ToastProvider: Provider = (): JSX.Element => {
  return <Toast />;
};
ToastProvider.ref = null;
export default ToastProvider;
