import React from 'react'
import './Footer.scss'
import mastercard from '../../assets/img/creditCards/mastercard.png'
import mir from '../../assets/img/creditCards/mir.png'
import visa from '../../assets/img/creditCards/visa.png'
import { NavLink } from 'react-router-dom'

export const Footer: React.FC = () => {
	return (
		<footer className="footer-outer">
			<div className="container-1450">
				<div className="footer">
					<div className="footer-copyright">
						<p className="text-grey">&#xa9; 2020 React-Ice-Cream</p>
						<p className="text-grey">У нас лучшее мороженое</p>
					</div>
					<nav className="footer-nav">
						<ul className="footer-nav__list">
							<li className="footer-nav__item">
								<NavLink to='/' exact className="footer-nav__link">Меню</NavLink>
							</li>
							<li className="footer-nav__item">
								<NavLink to='/events' className="footer-nav__link">Акции</NavLink>
							</li>
							<li className="footer-nav__item">
								<NavLink to='/delivery' className="footer-nav__link">Доставка</NavLink>
							</li>
							<li className="footer-nav__item">
								<NavLink to='/about' className="footer-nav__link">О нас</NavLink>
							</li>
							<li className="footer-nav__item">
								<NavLink to='/contacts' className="footer-nav__link">Контакты</NavLink>
							</li>
						</ul>
						<div className="footer-cards">
							<div className="footer-cards__list">
								<img
									className="footer-card footer-card--mastercard"
									src={mastercard}
									alt="mastercard"
								/>
								<img
									className="footer-card footer-card--mir"
									src={mir}
									alt="mir"
								/>
								<img
									className="footer-card footer-card--visa"
									src={visa}
									alt="visa"
								/>
							</div>
						</div>
					</nav>
					<div className="footer-social">
						<p className="footer-social__github text-grey">Автор в GitHub</p>
						<a
							href="https://github.com/crimer/ice-cream-react"
              target="_blank"
              rel="noopener noreferrer"
							className="footer-social__link">
							@react-ice-cream
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}
