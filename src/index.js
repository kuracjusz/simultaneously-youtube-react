import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter as Router, Route} from 'react-router-dom';

ReactDOM.render(<div>
    <Router>
        <div>
            <Route exact path="/videos/:id?/:progress?" component={App} />
            <Route exact path="/" component={App} />
        </div>
    </Router>
    {/* <App /> */}
</div>
, document.getElementById('root'));
registerServiceWorker();
