import React from "react";
import "../css/Categoryholder.css";
import CategoryBar from "./category-name-bar";
import MovireCard from "./movieCard";

function CategoryHolder() {
	return (
		<div className="category-holder">
			<CategoryBar />
			<div className="listholder">
				<MovireCard />
				<MovireCard />
				<MovireCard />
				<MovireCard />
				<MovireCard />
				<MovireCard />
				<MovireCard />
			</div>
		</div>
	);
}

export default CategoryHolder;
