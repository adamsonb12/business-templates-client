import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Profile from './components/user/Profile';
import Main from './components/Main';
import Nav from './components/navigation/Nav';

import './styles/App.scss';

// Browser Router around the app's routes

const App = () => (
    <BrowserRouter>
        <main>
            <Nav />
            <Route exact path="/" component={Main} /> {/* Route for home */}
            <Route /> {/* Route for File Page View */}
            <Route /> {/* Route for Editing/Uploading a File */}
            <Route path="/profile/:user_id" component={Profile} />
            <Route /> {/* Route for Editing a User */}
        </main>
        {/* footer component */}
    </BrowserRouter>
);

export default App;
