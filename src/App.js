import './App.scss';
import Navbar from './components/Navbar/Navbar';
import BlackHero from './components/BlackHero/BlackHero';
import CartTitle from './components/CartTitle/CartTitle';
import CartImage from './components/CartImage/CartImage';
import CartLicenseButtonGroup from './components/CartLicenseButtonGroup/CartLicenseButtonGroup';
import CTAButton from './components/CTAButton/CTAButton';
import CartTotal from './components/CartTotal/CartTotal';
import { HeroCart, CartItems, CTAButtonBlack } from './data';

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

	const buyButton = CTAButtonBlack.map((item) => {
		return (
			<CTAButton
				key={item.id}
				{...item}
			/>
		);
	});

	return (
		<div className="App">
			<Navbar />
			{hero}
			<CartTitle />
			{cartImage}
			<CartLicenseButtonGroup />
			{buyButton}
			<CartTotal />
		</div>
	);
}

export default App;
