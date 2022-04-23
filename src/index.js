import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Myapp from './modules/myApp.js';

ReactDOM.render(<div>
    
    <App />
    <Myapp />
    </div>, document.getElementById('root'));

registerServiceWorker();
