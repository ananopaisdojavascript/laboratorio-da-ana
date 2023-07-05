const factorial = require('../src/1153')

describe('simple factorial', () => {
	it('should return 24', () => {
		const num = 4
		const result = 24
		const op = factorial(num)
		expect(op).toEqual(result)
	})

	it('should return 720', () => {
		const num = 6
		const result = 720
		const op = factorial(num)
		expect(op).toEqual(result)
	})

	it('should return 1', () => {
		const num = 1
		const result = 1
		const op = factorial(num)
		expect(op).toEqual(result)
	})

	it('should return 39916800', () => {
		const num = 11
		const result = 39916800
		const op = factorial(num)
		expect(op).toEqual(result)
	})

	it('should return 479001600', () => {
		const num = 12
		const result = 479001600
		const op = factorial(num)
		expect(op).toEqual(result)
	})
})