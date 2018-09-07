import React from 'react';
import ReactDOM from 'react-dom';
import Badge from './Badge';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Badge type="new" data="1" color="lime" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
