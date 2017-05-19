require('../less/main.less');

'use strict';

import React from ('react');
import ReactDOM from ('react-dom');

class Entry extends Component {
  render() {
    return (
      <div className="myDiv">
        <p>Test</p>
      </div>
    );
  }
}

ReactDOM.render(<Entry />, document.getElementById('root'));
