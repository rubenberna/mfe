import React from 'react';
import { render } from 'react-dom';
import App from './App';

const mount = (el) => {
  if (el) {
    render(
      <App/>,
      el
    )
  }
}

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#_marketing-dev-root');
  mount(el);
}

export { mount };