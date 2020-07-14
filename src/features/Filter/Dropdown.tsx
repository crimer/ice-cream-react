import React, { useState } from 'react'
import cls from 'classnames'

import './Filter.scss'

type DropdownTypes = {
	title: string
	list: DropdownItem[]
}

export type DropdownItem = {
	id: number
	title: string
	selected: boolean
	key: string
}

export const Dropdown: React.FC<DropdownTypes> = props => {
	const [open, setOpen] = useState<boolean>(false)
	return (
		<>
			<div className="filter-dd__wrapper">
				<div className="filter-dd__header" onClick={() => setOpen(!open)}>
					<div className={cls("filter-dd__title",{'list--active': open})}>{props.title}</div>
				</div>
				{open && (
					<ul className={cls('filter-dd__list', { 'list--active': open })}>
						{props.list.map(item => (
							<li className="filter-dd__item" key={item.id}>
								<label className="filter__label" htmlFor={item.key}>
									<input
										className="filter__input"
										type="checkbox"
										name={item.key}
										id={item.key}
									/>
									{item.title}
								</label>
							</li>
						))}
					</ul>
				)}
			</div>
		</>
	)
}
