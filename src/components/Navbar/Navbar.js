import React from 'react';
import './navbar.scss';
import { Logo, HamburgerMenu, Cart } from '../../icons';
import { menuItems } from '../../data';

function Navbar() {
	return (
		<nav>
			<div className="nav-wrapper">
				<div className="nav-left">
					{menuItems.map((item) => {
						return (
							<a
								href={item.url}
								key={item.id}>
								{item.name === 'Categorii' ? (
									<span className="hamburger">
										<span>
											<HamburgerMenu />
										</span>
										<span>Categorii</span>
									</span>
								) : (
									item.name
								)}
							</a>
						);
					})}
				</div>
				<div className="nav-logo">
					<a
						href="/"
						className="logo-link">
						<Logo />
					</a>
				</div>
				<div className="nav-cart">
					<a href="#">
						<span className="cart">
							<span>
								<Cart />
							</span>
							<span>Coș</span>
						</span>
					</a>
					<a
						href="#"
						className="button">
						Login
					</a>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
