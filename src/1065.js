const evenSum = arr => {
	const even = arr.filter(num => num % 2 === 0)
	return `${even.length} valores pares`
}

module.exports = evenSum