import React from 'react'
import { Form as FinalForm } from 'react-final-form'
import './Form.scss'

type FormProps = {
	btnText: string
}

export const Form: React.FC<FormProps> = ({ btnText, children }) => {
	const submit = (values: any) => {
		console.log(values)
	}
	const validate = (values: any) => {
		type Errors = {
			firstName: string
			email: string
			message: string
		}
		const errors: Errors = {
			firstName: '',
			email: '',
			message: '',
		}
		if (!values.firstName) {
			errors.firstName = 'Required'
		}
		if (!values.email) {
			errors.email = 'Required'
		}
		if (!values.message) {
			errors.message = 'Required'
		}
		return errors
	}

	return (
		<div>
			<FinalForm
        validate={validate}
				onSubmit={submit}
				render={({ handleSubmit, submitting, pristine }) => (
					<form className="form" onSubmit={handleSubmit}>
						{children}
						<button
							className="form__submit"
							type="submit">
							{btnText}
						</button>
					</form>
				)}
			/>
		</div>
	)
}
