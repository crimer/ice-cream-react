import React from 'react'
import { YMaps, Map, Placemark } from 'react-yandex-maps'
import './Contacts.scss'
import { Form } from '../../features/Form/Form'
import { FormGroup } from '../../features/Form/FormGroup'

export const Contacts: React.FC = () => {
	return (
		<>
			<div className="contacts">
				<div className="contacts__map">
					<h1 className="contacts__title">Наши контакты</h1>
					<YMaps>
						<Map
							width="100%"
							defaultState={{ center: [55.763356, 37.551259], zoom: 15 }}>
							<Placemark geometry={[55.763356, 37.551259]} />
						</Map>
					</YMaps>
					<div className="contacts__info">
						<p>Адрес: г. Москва, ул. Сергея Макеева, д. 13</p>
						<p>Телефон: 8-800-555-35-35</p>
					</div>
				</div>
				<div className="contacts__form">
					<h1 className="contacts__title">Связаться с нами</h1>
					<Form btnText="Отправить">
						<FormGroup
							label="Ваше Имя"
							name="firstName"
							placeholder="Имя"
						/>
						<FormGroup label="Ваш email" name="email" placeholder="Email" />
						<FormGroup
							label="Сообщение"
							name="message"
							placeholder="Сообщение..."
							type="textarea"
						/>
					</Form>
				</div>
			</div>
		</>
	)
}
