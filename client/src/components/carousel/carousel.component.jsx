import React, { useState } from "react";
import "./carousel.styles.scss";

const Carousel = ({ imageUrls }) => {
	const [current, setCurrent] = useState(0);
	const length = imageUrls.length;

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	if (!Array.isArray(imageUrls) || length <= 0) {
		return null;
	}

	return (
		<div className='carousel'>
			<span className='left-arrow' onClick={prevSlide}>
				&#10094;
			</span>
			<span className='right-arrow' onClick={nextSlide}>
				&#10095;
			</span>
			{imageUrls.map((url, index) => (
				<div className={index === current ? "slide active" : "slide"} key={index}>
					{index === current && <img src={url} alt='slide' className='image' />}
				</div>
			))}
		</div>
	);
};

export default Carousel;
