import types from './types'

interface LoadCards {
	type: typeof types.LOAD_CARDS
}

const loadCards = (): LoadCards => ({
	type: types.LOAD_CARDS,
})

export default {
	loadCards,
}
