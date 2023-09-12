import React, { useState } from "react";
// import './style.css';
import Logo from "../Logo/index";
import { ReactComponent as FavoritesIcon } from "./img/ic-favorites.svg"
import { ReactComponent as CartIcon } from "./img/ic-cart.svg"
import { ReactComponent as ProfileIcon } from "./img/ic-profile.svg"

const Header = (props) => {
	const { products, updateProducts } = props

	const [count, setCount] = useState()
	const [text, setText] = useState('')


	const handlerText = (e) => {
		setText(e.target.value)

		// const res = products.filter((el) => {
		// 	if (el.name.toLowerCase().includes(e.target.value.toLowerCase())) {
		// 		return el
		// 	}
		// })
		const res = products.filter((el) => {
			return el.name.toLowerCase().includes(e.target.value.toLowerCase())
		})
		!text ? updateProducts(products) : updateProducts(res);
		setCount(res.length)
	}
	return (
		<>
			<header className="bg-main-yellow">
				<div className="max-w-screen-1030 px-[15px] mx-auto flex justify-between h-[80px] items-center gap-[20px]">
					<Logo />
					<input className="w-full flex-grow-1 rounded-[20px] border-none outline-none text-[25px] h-[50px] px-[20px]"
						type="search" placeholder="Искать товары" value={text} onChange={handlerText} />
					<nav className="flex items-center gap-[30px]">
						<a href="/"><FavoritesIcon /></a>
						<a href="/"><CartIcon /></a>
						<a href="/"><ProfileIcon /></a>
					</nav>

				</div>
			</header>


			{text ? <div>По запросу "{text}" найдено {count} товаров</div> : null}

		</>
	)
}


export default Header;