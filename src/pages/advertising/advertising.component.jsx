import { useState } from "react";
import "./advertising.styles.scss";
import InputBar from "../../components/inputBar/inputbar.component";
("../../components/inputBar/inputbar.component");
import AdvertisingProgress from "../../components/progress/advertisingprogress.component";

const Advertising = () => {
	const [progress, setProgress] = useState(1);
	const handleChange = (event) => {
		setProgress(progress + 1);
	};
	return (
		<section className='advertising'>
			<form action='submit' className='advertising__form'>
				<AdvertisingProgress progress={progress} />
				<InputBar type={"text"} name={"name"} value={null} placeholder={"name"} />
			</form>
		</section>
	);
};

export default Advertising;
