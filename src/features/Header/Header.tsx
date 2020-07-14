import React from 'react'
import arrow from '../../assets/svg/arrow.svg'
import basket from '../../assets/svg/basket.svg'
import logo from '../../assets/svg/logo.svg'
import telephone from '../../assets/svg/telephone.svg'
import user from '../../assets/svg/user.svg'
import './Header.scss'
import { NavLink } from 'react-router-dom'

export const Header: React.FC = () => {
	return (
		<header className="header-outer">
			<div className="container-1450">
				<div className="header">
					<div className="header__left">
						<div className="header-logo">
							<img className="header-logo__icon" src={logo} alt="logo" />
						</div>
						<nav className="header-nav">
							<ul className="header-nav__list">
								<li className="header-nav__item">
									<NavLink
										to="/"
										exact
										activeClassName="item--active"
										className="header-nav__link">
										Меню
									</NavLink>
								</li>
								<li className="header-nav__item">
									<NavLink
										to="/events"
										activeClassName="item--active"
										className="header-nav__link">
										Акции
									</NavLink>
								</li>
								<li className="header-nav__item">
									<NavLink
										to="/delivery"
										activeClassName="item--active"
										className="header-nav__link">
										Доставка
									</NavLink>
								</li>
								<li className="header-nav__item">
									<NavLink
										to="/about"
										activeClassName="item--active"
										className="header-nav__link">
										О нас
									</NavLink>
								</li>
								<li className="header-nav__item">
									<NavLink
										to="/contacts"
										activeClassName="item--active"
										className="header-nav__link">
										Контакты
									</NavLink>
								</li>
							</ul>
						</nav>
					</div>
					<div className="header__right">
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
			</div>
		</header>
	)
}
