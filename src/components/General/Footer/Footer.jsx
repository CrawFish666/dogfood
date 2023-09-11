import React from "react";
import Logo from "../Logo";
import './style.css'


const Footer = () => {
	return (
		<footer>
			<div className="footer-container">
				<div className="footer__info">
					<Logo />
					<span className="footer__copyright">Интернет магазин DogFood.ru</span>
				</div>
				<nav className="footer__nav"></nav>
				<div className="footer__contacts">
					<span>Мы на связи</span>
					<a href="#" className="footer__tel">8 (999) 00-00-00</a>
					<a href="#" className="footer__email">dogfood.ru@gmail.com</a>
					<div className="footer__social">
						<a href="#" className="footer__telegram">Telegram</a>
						<a href="#" className="footer__whatsApp">WhatsApp</a>
						<a href="#" className="footer__viber">viber</a>
						<a href="#" className="footer__instagram">instagram</a>
						<a href="#" className="footer__vk">vk</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer