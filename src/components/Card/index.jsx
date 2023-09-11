import React from "react";
import './style.css'

const Card = (props) => {
	const { picture, price, name } = props
	return (
		<div className="card">
			<div className="card__img">
				<img src={picture} alt={name} />
			</div>
			<div className="card__price">{price} ₽</div>
			<div className="card__name">{name}</div>
			<button className="btn">В корзину</button>
		</div>
	)
}

Card.defaultProps = {
	picture: "https://react-learning.ru/image-compressed/1.jpg"
}

export default Card;