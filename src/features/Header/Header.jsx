import React from 'react'
import logo from '../../assets/logo.svg'
import './Header.scss'

export const Header = () => {
	return (
		<section className="header">
			<div className="header__logo">
				<img src={logo} alt="logo" />
			</div>
			<div className="header__fillials">
				<p>Владивосток</p>
				<p>4 филиала</p>
			</div>
			<div className="header__nav">
				<ul>
					<li>Меню</li>
					<li>Акции</li>
					<li>Доставка</li>
					<li>О нас</li>
					<li>Контакты</li>
				</ul>
			</div>
			<div className="header__contacts">
				<p>+7 (937) 34-65-12</p>
				<p>Доставка с 09:00 до 21:00</p>
			</div>
			<div className="header__profile">
				<p>Войти</p>
			</div>
			<div className="header__basket">5</div>
		</section>
	)
}
