import { Routes, Route } from 'react-router-dom';
import ReturnPayPal from './components/ReturnPayPal';
import CancelPayPal from './components/CancelPayPal';
import Home from './components/Home';
import './App.css';

function App() {
	return (
		<>
			<Routes>
			<Route exact path='/' element={<Home />} />
				<Route exact path='/woozeee-paypal-return' element={<ReturnPayPal />} />
				<Route exact path='/woozeee-paypal-cancel' element={<CancelPayPal />} />
			</Routes>
		</>
	);
}

export default App;
