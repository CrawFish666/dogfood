import React from 'react'
import './style.css';
import logo from './img/logo.svg'

export default function Logo() {
	return (
		<a href="/">
			<img className='' src={logo} alt="Dog Food" />
			{/* <span>DogFood</span> */}
		</a>
	)
}
