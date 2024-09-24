import React from "react";

const Categories = ({
	categoryChangeHandler,
	categories,
	selectedCategory,
}) => {
	return (
		<div className="text-center py-5">
			<h2 className="text-3xl font-bold mb-4">Our Menu</h2>
			<hr className="w-1/2 mx-auto border-b-2 border-slate-900" />
			<div className="flex justify-center gap-4 mt-4">
				{categories.map((cat, index) => {
					return (
						<button
							className={`capitalize text-white px-4 py-2 rounded-md ${
								selectedCategory === cat
									? "bg-slate-900"
									: "bg-slate-600 hover:bg-slate-700"
							}`}
							key={index}
							onClick={() => categoryChangeHandler(cat)}
						>
							{cat}
						</button>
					);
				})}
			</div>
		</div>
	);
};

export default Categories;
