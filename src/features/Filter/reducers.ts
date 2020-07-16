import { TOGGLE_FILTER } from './types'
import { FilterActions } from './actions'

export interface IFilterState {
	filters: string[]
}

const initState: IFilterState = {
	filters: [],
}

export default (state = initState, action: FilterActions): IFilterState => {
	switch (action.type) {
		case TOGGLE_FILTER:
			return toggleFilter(state, action.payload)
		default:
			return state
	}
}

function toggleFilter(state: IFilterState, filter: string): IFilterState {
	if (state.filters.indexOf(filter) !== -1) {
		// если фильтр есть = удаляем
		let newFilters = state.filters.filter(f => f !== filter)
		return { ...state, filters: newFilters }
	} else {
		// если фильтра нет = добавляем
		return { ...state, filters: [...state.filters, filter] }
	}
}
