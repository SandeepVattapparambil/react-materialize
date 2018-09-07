import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button
    type="raised"
    size="large"
    disabled={false}
    label="Click"
    color="lime"
    textColor="white-text"
    wavesEffect={true}
    wavesType="regular"
    wavesColor="waves-red"
    href="http://www.sandeepv.in"
    onClick={() => {
       alert("hello");
    }}>
 </Button>, div);
  ReactDOM.unmountComponentAtNode(div);
});
