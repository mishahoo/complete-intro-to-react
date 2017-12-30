import React from 'react';
import { render } from 'react-dom';

const MyTitle = function(props) {
  return (
    <div>
      <h1 style={{ color: props.color }}>{props.title}</h1>
    </div>
  );
};

const MyFirstComponent = function() {
  return (
    <div id="my-first-component">
      <MyTitle title="one" color="peru" />
      <MyTitle title="five" color="lime" />
      <MyTitle title="three" color="aquamarine" />
    </div>
  );
};

render(<MyFirstComponent />, document.getElementById('app'));
