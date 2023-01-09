import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//theme for custom material ui
import { ThemeProvider } from '@mui/material';
//const with theme for material ui
import { theme } from './constants/consts';
//router 
import { BrowserRouter } from 'react-router-dom';
//store from redux toolkit
import { HeroesStore } from './context/store';
//provider for the store redux
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider theme={ theme }>
            <BrowserRouter>
                <Provider store={HeroesStore}>
                    <App />    
                </Provider>
            </BrowserRouter>
        </ThemeProvider>    
    </React.StrictMode>  
);