import React from 'react';
import './stylesheets/style.css';
import Home from './components/pages/Home';
import EstatePlanningPage from './components/pages/EstatePlanningPage';
import EstateAdministrationPage from './components/pages/EstateAdministrationPage';
import EstateAndTrustPage from './components/pages/EstateTrustPage';
import BankruptcyPage from './components/pages/BankruptcyPage';
import AboutPage from './components/pages/AboutPage';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/estateplanning" component={EstatePlanningPage} />
				<Route path="/estateadmin" component={EstateAdministrationPage} />
				<Route path="/estateandtrust" component={EstateAndTrustPage} />
				<Route path="/bankruptcy" component={BankruptcyPage} />
				<Route path="/about" component={AboutPage} />
			</Switch>
		</Router>
	);
}

export default App;
