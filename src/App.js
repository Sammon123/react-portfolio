import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume/Resume';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route exact path='/contact'>
						<Contact />
					</Route>
					<Route exact path='/portfolio'>
						<Portfolio />
					</Route>
					<Route exact path='/resume'>
						<Resume />
					</Route>
				</Switch>
			</Router>
			<Footer />
		</div>
	);
}

export default App;
