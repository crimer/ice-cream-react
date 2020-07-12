import React from 'react'
import arrow from '../../assets/svg/arrow.svg'
import basket from '../../assets/svg/basket.svg'
import logo from '../../assets/svg/logo.svg'
import telephone from '../../assets/svg/telephone.svg'
import user from '../../assets/svg/user.svg'
import './Header.scss'
import { NavLink } from 'react-router-dom'

export const Header = () => {
	return (
		<header className="header-outer">
			<div className="container-1450">
				<div className="header">
					<div className="header-logo">
						<img className="header-logo__icon" src={logo} alt="logo" />
					</div>
					<div className="header-fillials">
						<div className="header-fillials__icon">
							<img className="icon" src={arrow} alt="arrow" />
						</div>
						<div className="header-fillials__info">
							<p className="header-fillials__city">Владивосток</p>
							<p className="header-fillials__count text-grey">4 филиала</p>
						</div>
					</div>
					<nav className="header-nav">
						<ul className="header-nav__list">
							<li className="header-nav__item">
								<NavLink to="/" className="header-nav__link">Меню</NavLink>
							</li>
							<li className="header-nav__item">
								<NavLink to="/" className="header-nav__link">Акции</NavLink>
							</li>
							<li className="header-nav__item">
								<NavLink to="/" className="header-nav__link">Доставка</NavLink>
							</li>
							<li className="header-nav__item">
								<NavLink to="/" className="header-nav__link">О нас</NavLink>
							</li>
							<li className="header-nav__item">
								<NavLink to="/" className="header-nav__link">Контакты</NavLink>
							</li>
						</ul>
					</nav>
					<div className="header-contacts">
						<div className="header-contacts__icon">
							<img className="icon" src={telephone} alt="telephone" />
						</div>
						<div className="header-contacts__info">
							<p className="header-contacts__tel">+7 (937) 34-65-12</p>
							<p className="header-contacts__time text-grey">
								Доставка с 09:00 до 21:00
							</p>
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
				</div>
			</div>
		</header>
	)
}
