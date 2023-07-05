const evenSum = require('../src/1065')

describe('even between five numbers', () => {
	it('should return the message "3 valores pares"', () => {
		const arr = [0, -1, -4, -2, -19]
		const result = '3 valores pares'
		const op = evenSum(arr)
		expect(op).toEqual(result)
	})

	it('should return the message "2 valores pares"', () => {
		const arr = [-2, 1, 18, 9, 3]
		const result = '2 valores pares'
		const op = evenSum(arr)
		expect(op).toEqual(result)
	})

	it('should return the message "5 valores pares"', () => {
		const arr = [0, 0, 0, 0, 0]
		const result = '5 valores pares'
		const op = evenSum(arr)
		expect(op).toEqual(result)
	})

	it('should return the message "3 valores pares"', () => {
		const arr = [0, 1, 4, 2, 19]
		const result = '3 valores pares'
		const op = evenSum(arr)
		expect(op).toEqual(result)
	})
})