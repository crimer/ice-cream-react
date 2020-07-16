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
	{
		id: 4,
		title: 'Печенье и вафли',
		selected: false,
		key: 'cookies',
	},
	{
		id: 5,
		title: 'Фрукты и ягоды',
		selected: false,
		key: 'fruits',
	},
	{
		id: 6,
		title: 'Карамель',
		selected: false,
		key: 'caramel',
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
	{
		id: 4,
		title: 'Стаканчик',
		selected: false,
		key: 'cup',
	},
	{
		id: 5,
		title: 'Весовое',
		selected: false,
		key: 'weight',
	},
]
const extras: DropdownItem[] = [
	{
		id: 1,
		title: 'Новинки',
		selected: false,
		key: 'new',
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
				<div className="filter__group filter-dd">
					<Dropdown title="Особое" list={extras} />
				</div>
				<button className="filter__btn">Сбросить</button>
			</div>
		</div>
	)
}
