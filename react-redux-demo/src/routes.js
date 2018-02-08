import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';

export default (
    <Route path="/" component={App}>
    {/* IndexRoute is what u use when there is a Root path you want to expose */}
    <IndexRoute component={HomePage}/>
    <Route path="about" component={AboutPage}/>
    </Route>
);
