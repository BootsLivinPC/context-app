import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router } from 'react-router-dom'
import AccountProvider from "./providers/AccountProvider"
import "semantic-ui-css/semantic.min.css"

ReactDOM.render(
<AccountProvider>
<Router>
<App />
</Router>
</AccountProvider>,
document.getElementById('root'));


