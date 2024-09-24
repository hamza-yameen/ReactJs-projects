import React from "react";

const Item = ({ item }) => {
	const { title, price, img, desc } = item;

	return (
		<div className="w-1/3 md:w-1/2 lg:w-1/3">
			<div className="m-2 card bg-white shadow-md rounded-lg overflow-hidden min-h-[360px]">
				<img className="w-full h-48 object-cover" src={img} alt={title} />
				<div className="p-4">
					<h2 className="text-xl font-bold mb-2">{title}</h2>
					<p className="text-gray-700">$ {price}</p>
					<p className="text-gray-500">{desc}</p>
				</div>
			</div>
		</div>
	);
};

export default Item;
