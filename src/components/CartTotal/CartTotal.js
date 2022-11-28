import React from 'react';
import './cartTotal.scss';
import '../../index.scss';

const CartTotal = (props) => {
	return (
		<div className="cartTotalContainer">
			<div className="subtotal">
				<span>Subtotal:</span>
				<span>99.00 €</span>
			</div>
			<div className="total">
				<span>Total de plata:</span>
				<span>99.00 €</span>
			</div>
			<button className="buyButton">Cumpara</button>
			<button className="continueShoppingButton">
				Continua cumparaturile
			</button>
			<div className="contactUs">
				<p>
					Daca sunteti interesat de o licenta pentru publicitate, un
					produs comercial, un film sau orice alt scop, ne puteti
					contacta pentru o oferta personalizata.
				</p>
				<button className="contactButton">Contacteaza-ne</button>
			</div>
		</div>
	);
};

export default CartTotal;
