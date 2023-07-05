const perfectNumber = require('../src/1164')

describe('perfect number', () => {
	it('should return the message "6 eh perfeito"', () => {
		const num = 6
		const result = '6 eh perfeito'
		const op = perfectNumber(num)
		expect(op).toEqual(result)
	})

	it('should return the message "28 eh perfeito"', () => {
		const num = 28
		const result = '28 eh perfeito'
		const op = perfectNumber(num)
		expect(op).toEqual(result)
	})

	it('should return the message "496 eh perfeito"', () => {
		const num = 496
		const result = '496 eh perfeito'
		const op = perfectNumber(num)
		expect(op).toEqual(result)
	})

	it('should return the message "11 nao eh perfeito"', () => {
		const num = 11
		const result = '11 nao eh perfeito'
		const op = perfectNumber(num)
		expect(op).toEqual(result)
	})

	it('should return the message "32 nao eh perfeito"', () => {
		const num = 32
		const result = '32 nao eh perfeito'
		const op = perfectNumber(num)
		expect(op).toEqual(result)
	})

	it('should return the message "45 nao eh perfeito"', () => {
		const num = 45
		const result = '45 nao eh perfeito'
		const op = perfectNumber(num)
		expect(op).toEqual(result)
	})

	it('should return the message "20 nao eh perfeito"', () => {
		const num = 20
		const result = '20 nao eh perfeito'
		const op = perfectNumber(num)
		expect(op).toEqual(result)
	})
})