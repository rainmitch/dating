
// src/App.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';

import Home from './home.js';
import Error from './error.js';

import {Navbar, NavbarEntry} from './scripts/navbar.js';

ReactDOM.render(
    <Router onUpdate={() => window.scrollTo(0, 0)}>
		<div>
			<Navbar>
				<NavbarEntry link="./">Home</NavbarEntry>
			</Navbar>
			<Switch>
				<Route path="/">
					<Switch>
						<Route exact path="/" component={Home}/>
						<Route component={Error} />
					</Switch>
				</Route>
				<Route component={Error} />
			</Switch>
        </div>
    </Router>,
    
    document.getElementById('root')
);
