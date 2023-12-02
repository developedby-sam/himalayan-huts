import "./rentpage.styles.scss";
import Listing from "../../components/listing/listing.component";
import React, { useState, useEffect } from "react";

import featuredRentalCardImg from "../../assets/featured-img.png";

const Rentpage = () => {
	const [rentalProperties, setRentalProperties] = useState([]);

	useEffect(() => {
		const fetchData = async (type) => {
			const limit = 20; // Set limit to 4
			try {
				const response = await fetch(`http://localhost:3000/api/listing/get?type=${type}&limit=${limit}`);
				console.log(response);
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				return await response.json();
			} catch (error) {
				console.error("Error fetching data: ", error);
			}
		};

		fetchData("rent").then((data) => {
			if (data) setRentalProperties(data);
		});
	}, []);
	return (
		<div className='rentpage'>
			<section className='homepage__featured-rentals'>
				<h2 className='section-title'>Featured Rentals</h2>
				<Listing properties={rentalProperties} imageURL={featuredRentalCardImg} />
			</section>
		</div>
	);
};

export default Rentpage;
