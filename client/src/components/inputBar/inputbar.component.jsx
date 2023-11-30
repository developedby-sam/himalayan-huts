import "./inputBar.styles.scss";

const InputBar = (props) => {
	return (
		<div className='input-group'>
			<label htmlFor={props.id}>
				{props.label} {props.required && <span>*</span>}
			</label>
			<input
				id={props.id}
				type={props.type || "text"}
				value={props.value}
				onChange={props.onChange}
				required={props.required}
				placeholder={props.placeholder}
			/>
		</div>
	);
};

export default InputBar;
