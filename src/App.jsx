import React, { useState } from "react";
import Card from "./components/Card";

import data from "./assets/data.json"
import Header from "./components/General/Header/Header.jsx";

import Footer from "./components/General/Footer/Footer.jsx";

const App = () => {
	const [goods, setGoods] = useState(data)


	return (
		<>
			<Header products={data} updateProducts={setGoods} />
			<main>
				<div className="max-w-screen-1030 mx-auto p-[15px] grid grid-cols-4 gap-[15px]">
					{goods.map((data, index) => {
						return (
							<Card
								key={index}
								picture={data.picture}
								price={data.price}
								name={data.name}
							/>
						)
					})}
				</div>
			</main>
			<Footer />

		</>
	)
}

export default App;


