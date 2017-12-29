import React from 'react';
import { render } from 'react-dom';

const ce = React.createElement;

const MyTitle = function(props) {
  return ce('div', null, ce('h1', { style: { color: props.color } }, props.title));
};

const MyFirstComponent = function() {
  return ce(
    'div',
    null,
    ce(MyTitle, { title: 'One', color: 'peru' }),
    ce(MyTitle, { title: 'Two', color: 'lime' }),
    ce(MyTitle, { title: 'Three', color: 'aquamarine' })
  );
};

render(ce(MyFirstComponent), document.getElementById('app'));
