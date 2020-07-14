import React from 'react'
import './Filter.scss'
import { Dropdown, DropdownItem } from './Dropdown'

const tastes: DropdownItem[] = [
	{
		id: 1,
		title: 'Пломбир',
		selected: false,
		key: 'plombir',
	},
	{
		id: 2,
		title: 'Шоколад',
		selected: false,
		key: 'chocolate',
	},
	{
		id: 3,
		title: 'Орехи',
		selected: false,
		key: 'nuts',
	},
]
const formats: DropdownItem[] = [
	{
		id: 1,
		title: 'Эскимо',
		selected: false,
		key: 'eskimo',
	},
	{
		id: 2,
		title: 'Рожок',
		selected: false,
		key: 'horn',
	},
	{
		id: 3,
		title: 'Контаинер',
		selected: false,
		key: 'container',
	},
]

export const Filter: React.FC = () => {
	return (
		<div className="filter">
			<p className="filter__header">Фильтр</p>
			<div className="filter__body card--white">
				<div className="filter__group filter-dd">
					<Dropdown title="Форматы" list={formats} />
				</div>
				<div className="filter__group filter-dd">
					<Dropdown title="Вкусы" list={tastes} />
				</div>
				<label className="filter__label filter-lable--bold" htmlFor="news">
					<input className="filter__input" type="checkbox" name="" id="news" />
					Новинки
				</label>
				<button className="filter__btn">
					Сбросить
				</button>
			</div>
		</div>
	)
}
