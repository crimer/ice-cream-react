export const toCurrency = (price: number) =>
	new Intl.NumberFormat('ru-RU', {
		style: 'currency',
		currency: 'RUB',
	}).format(price)
