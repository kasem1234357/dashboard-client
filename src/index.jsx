import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import {BrowserRouter as Router,} from 
'react-router-dom'
import AuthProvider from './components/Providers/AuthProviders.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>

    
      <Router>
        <Provider store={store}>
        <AuthProvider>
        <App/>
     </AuthProvider> 
     </Provider>
    
    </Router>

 
  
    
    
  
);


