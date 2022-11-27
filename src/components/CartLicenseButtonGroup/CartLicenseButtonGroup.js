import React from 'react';
import './cartLicenseButtonGroup.scss';

const CartLicenseButtonGroup = () => {
	return (
		<div className="buttonGroupContainer">
			<span className="strong">Alege un tip de licenta:</span>
			<div className="buttonGroup">
				<fieldset>
					<div className="outlinedCartButton">
						<input
							type="radio"
							name="licensetype"
							id="rmweb"
							value="Rights Managed Web | 19€"
							checked
						/>
						<label htmlFor="rmweb">Rights Managed - Web | 19€</label>
					</div>

					<div className="outlinedCartButton">
						<input
							type="radio"
							name="licensetype"
							id="rmall"
							value="Rights Managed All Media | 99€"
						/>
						<label htmlFor="rmall">
							Rights Managed - All Media | 99€
						</label>
					</div>
				</fieldset>
			</div>

			<div className="plainText">
				<p>
					Se poate utiliza doar o singura data intr-un articol
					editorial. Tipul media de utilizare nu este restrictionat cu
					acest tip de licenta (sunt excluse site-urile TV, productia
					de filme si pariuri). Imaginea se livreaza la rezolutie
					inalta, asa cum este specificat in descrierea fiecarei
					imagini.
				</p>
			</div>
		</div>
	);
};

export default CartLicenseButtonGroup;
