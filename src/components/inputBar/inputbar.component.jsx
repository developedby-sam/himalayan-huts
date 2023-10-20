import "./inputBar.styles.scss";

const InputBar = ({ type, name, value, placeholder }) => {
	return (
		<div className='inputBar'>
			<input type={type} name={name} value={value} placeholder={placeholder} />
		</div>
	);
};

export default InputBar;
