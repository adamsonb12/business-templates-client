import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';

import Profile from './components/user/Profile';
import Main from './components/Main';
import Nav from './components/navigation/Nav';

import './styles/App.scss';

// Browser Router around the app's routes

const App = () => (
    <BrowserRouter>
        <Container maxWidth="xl">
            <Nav />
            <Route exact path="/" component={Main} /> {/* Route for home */}
            <Route /> {/* Route for File Page View */}
            <Route /> {/* Route for Editing/Uploading a File */}
            <Route path="/profile/:userId" component={Profile} />
            <Route /> {/* Route for Editing a User */}
        </Container>
        {/* footer component */}
    </BrowserRouter>
);

export default App;
