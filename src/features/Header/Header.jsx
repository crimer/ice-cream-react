import React from 'react'
import arrow from '../../assets/arrow.svg'
import basket from '../../assets/basket.svg'
import logo from '../../assets/logo.svg'
import telephone from '../../assets/telephone.svg'
import user from '../../assets/user.svg'
import './Header.scss'

export const Header = () => {
	return (
		<header className="header">
			<div className="header-logo">
				<img className="header-logo__icon" src={logo} alt="logo" />
			</div>
			<div className="header-fillials">
				<div className="header-fillials__icon">
					<img className="icon" src={arrow} alt="arrow" />
				</div>
				<div className="header-fillials__info">
					<p className="header-fillials__city">Владивосток</p>
					<p className="header-fillials__count">4 филиала</p>
				</div>
			</div>
			<nav className="header-nav">
				<ul className="header-nav__list">
					<li className="header-nav__item">
						<a className="header-nav__link" href="google.com">Меню</a>
					</li>
					<li className="header-nav__item">
						<a className="header-nav__link">Акции</a>
					</li>
					<li className="header-nav__item">
						<a className="header-nav__link">Доставка</a>
					</li>
					<li className="header-nav__item">
						<a className="header-nav__link">О нас</a>
					</li>
					<li className="header-nav__item">
						<a className="header-nav__link">Контакты</a>
					</li>
				</ul>
			</nav>
			<div className="header-contacts">
				<div className="header-contacts__icon">
					<img className="icon" src={telephone} alt="telephone" />
				</div>
				<div className="header-contacts__info">
					<p className="header-contacts__tel">+7 (937) 34-65-12</p>
					<p className="header-contacts__time">Доставка с 09:00 до 21:00</p>
				</div>
			</div>
			<div className="header-profile">
				<div className="header-profile__icon">
					<img className="icon" src={user} alt="user" />
				</div>
				<p className="header-profile__login">Войти</p>
			</div>
			<div className="header-basket">
				<div className="header-basket__icon">
					<img className="icon" src={basket} alt="basket" />
				</div>
				<span className="header-basket__count">5</span>
			</div>
		</header>
	)
}
