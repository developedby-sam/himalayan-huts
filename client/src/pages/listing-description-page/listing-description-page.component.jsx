import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Carousel from "../../components/carousel/carousel.component";
// Styles
import "./listing-description-page.styles.scss";

const ListingDescriptionPage = () => {
	const location = useLocation();
	const { item } = location.state;

	const [agent, setAgent] = useState({});

	useEffect(() => {
		const fetchAgentData = async () => {
			try {
				const response = await fetch(`http://localhost:3000/api/user/${item.userRef}`);
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				const data = await response.json();
				setAgent(data);
			} catch (error) {
				console.error("Error fetching agent data:", error);
			}
		};

		if (item.userRef) {
			fetchAgentData();
		}
	}, [item.userRef]);

	return (
		<div className='propertyListingPage'>
			<section className='propertyListingPage__propertyInfo'>
				<div className='property-listing'>
					<header className='listing-header'>
						<div className='listing-title'>
							<h1>{item.title}</h1>
							<div className='listing-location'>{item.address}</div>
						</div>
						<div className='listing-price'>NRs. {item.price}</div>
						<div className='listing-type'>NRs. {item.type}</div>
					</header>

					<Carousel imageUrls={item.imageUrls} />

					<section className='listing-details'>
						<div className='general-info'>
							<table className='info-table'>
								<tbody>
									<td className='info-key'>Address</td>
									<td className='info-value'>{item.address}</td>
								</tbody>
								<tbody>
									<td className='info-key'>No. of Bedrooms</td>
									<td className='info-value'>{item.bedrooms}</td>
								</tbody>
								<tbody>
									<td className='info-key'>No. of Bathrooms</td>
									<td className='info-value'>{item.bathrooms}</td>
								</tbody>
								<tbody>
									<td className='info-key'>Price</td>
									<td className='info-value'>{item.price}</td>
								</tbody>
								<tbody>
									<td className='info-key'>Age of Building</td>
									<td className='info-value'>{item.ageOfBuilding}</td>
								</tbody>
								<tbody>
									<td className='info-key'>Warming Type</td>
									<td className='info-value'>{item.warmingType}</td>
								</tbody>
								<tbody>
									<td className='info-key'>Area</td>
									<td className='info-value'>{item.area}</td>
								</tbody>
							</table>
						</div>
					</section>
				</div>
			</section>

			<section className='propertyListingPage__userInfo'>
				<aside className='agent-info'>
					<div className='agent-card'>
						<img src={agent.avatar} alt={agent.username} className='agent-image' />
						<div className='agent-details'>
							<div className='agent-name'>{agent.username}</div>
							<div className='agent-title'>Real Estate Agent</div>
							<div className='agent-contact-info'>
								<button
									className='agent-email'
									onClick={() => {
										window.location.href = `mailto:${agent.email}`;
									}}
								>
									{agent.email}
								</button>
							</div>
						</div>
					</div>
				</aside>
			</section>
		</div>
	);
};

export default ListingDescriptionPage;
