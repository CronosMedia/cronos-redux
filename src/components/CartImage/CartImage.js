import React from 'react';
import { TrashCan } from '../../icons';
import './cartImage.scss';
import '../../index.scss';

function CartImage(props) {
	return (
		<div className="cartImageContainer">
			<div className="image">
				<img
					src={`/assets/images/${props.imageUrl}`}
					alt={props.title}
				/>
			</div>
			<div className="underImage">
				<div className="imageId">
					<span className="strong">ID Imagine:</span>
					<br />
					<span className="plainText">{props.id}</span>
				</div>
				<div>
					<a
						href="#"
						className="deleteImage">
						<span className="strong">Elimina imaginea</span>
						<span>
							<TrashCan />
						</span>
					</a>
				</div>
			</div>
			<div className="imageCredit">
				<span className="strong">Credit imagine:</span>
				<br />
				<span className="plainText">{props.imageCredit}</span>
			</div>
			<div className="imageDescription">
				<span className="strong">Descriere:</span>
				<br />
				<span className="plainText">{props.imageDescription}</span>
			</div>
		</div>
	);
}

export default CartImage;
