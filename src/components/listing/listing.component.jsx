import "./listing.styles.scss";

import Card from "../card/card.component";

const Listing = () => {
	const items = [1, 2, 3, 4, 5];
	return (
		<div className='directory'>
			{items.map((item) => (
				<Card />
			))}
		</div>
	);
};

export default Listing;
