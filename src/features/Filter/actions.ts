import { TOGGLE_FILTER } from './types'

interface IToggleFilters {
	type: typeof TOGGLE_FILTER
	payload: string
}
export const toggleFilters = (value: string): IToggleFilters => ({
	type: TOGGLE_FILTER,
	payload: value,
})

export type FilterActions = IToggleFilters
