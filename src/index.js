import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { HashRouter as Router } from 'react-router-dom'; //BrowserRouter for local deployment
import './index.css';

ReactDOM.render(<Router>
    <App />
  </Router>, document.getElementById('root'));

