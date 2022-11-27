import './App.css';
import Navbar from './components/Navbar/Navbar';
import BlackHero from './components/BlackHero/BlackHero';
import CartTitle from './components/CartTitle/CartTitle';
import CartImage from './components/CartImage/CartImage';
import CartLicenseButtonGroup from './components/CartLicenseButtonGroup/CartLicenseButtonGroup';
import { HeroCart, CartItems } from './data';

function App() {
	const hero = HeroCart.map((item) => {
		return (
			<BlackHero
				key={item.id}
				{...item}
			/>
		);
	});

	const cartImage = CartItems.map((item) => {
		return (
			<CartImage
				key={item.id}
				{...item}
			/>
		);
	});

	return (
		<div
			div
			className="App">
			<Navbar />
			{hero}
			<CartTitle />
			{cartImage}
			<CartLicenseButtonGroup />
		</div>
	);
}

export default App;
