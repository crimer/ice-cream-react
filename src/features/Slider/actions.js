import { NEXT, PREV } from './types'

export const next = nextId => ({
	type: NEXT,
	payload: nextId,
})

export const prev = prevId => ({
	type: PREV,
	payload: prevId,
})
