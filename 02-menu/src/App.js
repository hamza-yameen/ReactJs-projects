import { useState } from "react";
import Categories from "./components/Categories";
import { allCategories, items } from "./data";
import Item from "./components/Item";

function App() {
	const [menuItems, setMenuItems] = useState(items);
	const [selectedCategory, setSelectedCategory] = useState("all");

	const categoryChangeHandler = (category) => {
		setSelectedCategory(category);
		if (category === "all") {
			setMenuItems(items);
			return;
		}
		const filteredItems = items.filter((item) => item.category === category);
		setMenuItems(filteredItems);
	};

	return (
		<div className="bg-slate-200 min-h-screen">
			<div className="container px-4 mx-auto">
				<Categories
					categoryChangeHandler={categoryChangeHandler}
					categories={allCategories}
					selectedCategory={selectedCategory}
				/>
				<div className="flex flex-row flex-wrap pb-5">
					{menuItems.map((item, index) => (
						<Item key={index} item={item} />
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
