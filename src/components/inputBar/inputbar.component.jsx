import "./inputBar.styles.scss";

const InputBar = ({ type, name, value, placeholder }) => {
	return (
		<div className='inputBar'>
			{/* <p className='inputBar__title'>{name}</p> */}
			<input type={type} name={name} value={value} placeholder={placeholder} />
		</div>
	);
};

export default InputBar;
