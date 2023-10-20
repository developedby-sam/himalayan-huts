import "./card.styles.scss";

const Card = () => (
	<div className='card'>
		<div className='card-image'></div>
		<div className='card-description'>
			<div className='price'>Nrs. 25000</div>
			<div className='description'>Appartement for rent.</div>
			<div className='place'>Tahachal, Kathmandu, NP</div>
			<div className='listing-date'>20 November 2023</div>
			<div className='card-footer'>Footer</div>
		</div>
	</div>
);

export default Card;
