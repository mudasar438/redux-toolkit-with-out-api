import React, { useState } from "react";

const Acti = () => {
const menuItems = ["Easy", "Medium", "Hard"];
const [activeButton, setActiveButton] = useState("");

return (
	<div>
	{menuItems.map((level, idx) => {
        console.log("level iiiiiiii",level)
        console.log(idx)
		return (
		<button
			key={level}
			onClick={() => {
			setActiveButton(level);
			}}
			style={{
			backgroundColor: activeButton === level ? "lightblue" : ""
			}}
		>
			{level}
		</button>
		);
	})}
	</div>
);
}

export default Acti;
