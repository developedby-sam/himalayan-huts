import "./advertisingprogress.styles.scss";
import check from "../../assets/check.svg";
import eye from "../../assets/eye.svg";
import pen from "../../assets/pen.svg";
import phone from "../../assets/phone.svg";

const AdvertisingProgress = ({ progress }) => {
	const getStepColor = (step) => {
		console.log(progress, step);
		if (progress >= step) {
			return "red";
		} else {
			return "gray";
		}
	};
	return (
		<div className='advertising__progress'>
			<div className={`advertising__progress-step ${getStepColor(1)}`}>
				<img src={pen} />
			</div>
			<div className={`advertising__progress-step ${getStepColor(2)}`}>
				<img src={eye} />
			</div>
			<div className={`advertising__progress-step ${getStepColor(3)}`}>
				<img src={phone} />
			</div>
			<div className={`advertising__progress-step ${getStepColor(4)}`}>
				<img src={check} />
			</div>
		</div>
	);
};

export default AdvertisingProgress;
