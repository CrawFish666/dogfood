import React from "react";
import './style.css'

const Card = (props) => {
	const { picture, price, name } = props
	return (
		<div className="border border-main-yellow p-[8px] grid gap-[10px]">
			<div className="w-full h-[180px]">
				<img className="w-full object-contain h-full" src={picture} alt={name} />
			</div>
			<div className="font-extrabold">{price} ₽</div>
			<div className="text-[14px]">{name}</div>
			<button className="w-max h-max rounded-[30px] p-[4px_20px] font-bold bg-main-yellow items-end">В корзину</button>
		</div>
	)
}

Card.defaultProps = {
	picture: "https://react-learning.ru/image-compressed/1.jpg"
}

export default Card;