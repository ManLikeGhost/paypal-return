import { Routes, Route } from 'react-router-dom';
import ReturnPayPal from './components/ReturnPayPal';
import CancelPayPal from './components/CancelPayPal';
import './App.css';

function App() {
	return (
		<>
			<Routes>
				<Route path='/woozeee-paypal-return' element={<ReturnPayPal />} />
				<Route path='/woozeee-paypal-cancel' element={<CancelPayPal />} />
			</Routes>
		</>
	);
}

export default App;
