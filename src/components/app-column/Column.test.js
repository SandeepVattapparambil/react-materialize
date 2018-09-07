import React from 'react';
import ReactDOM from 'react-dom';
import Column from './Column';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Column
        small="s6"
        medium="m6"
        large="l6"
        offset={["s2", "m3", "l1"]}
        push="s1"
        pull="s3"/>, div);
    ReactDOM.unmountComponentAtNode(div);
});
