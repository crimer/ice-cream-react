import React from 'react'
import { Field } from 'react-final-form'
import './Form.scss'

type FormGroupTypes = {
	type?: 'input' | 'textarea'
	label?: string
	name: string
	placeholder?: string
}

export const FormGroup: React.FC<FormGroupTypes> = ({
	type = 'input',
	label,
	name,
	placeholder = '',
}) => {
	return (
		<div className="form__group">
			{label && <label className="form__lable">{label}</label>}
			<Field
				name={name}
				component={type}
				className="form__input"
				placeholder={placeholder}
				render={({ input, meta }) => (
					<>
						<input {...input} />
						{meta.touched && meta.error && <span>{meta.error}</span>}
					</>
				)}
			/>
		</div>
	)
}
