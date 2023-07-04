const evenOrOdd = require('../src/1074')

describe('even or odd', () => {
	it('should return the message "NULL" if the number is 0', () => {
		const num = 0
		const result = 'NULL'
		const op = evenOrOdd(num)
		expect(op).toEqual(result)
	})

    it('should return the message "EVEN POSITIVE" if the number is even and positive', () => {
		const num = 10
		const result = 'EVEN POSITIVE'
		const op = evenOrOdd(num)
		expect(op).toEqual(result)
	})

	it('should return the message "EVEN POSITIVE" if the number is even and positive', () => {
		const num = 2
		const result = 'EVEN POSITIVE'
		const op = evenOrOdd(num)
		expect(op).toEqual(result)
	})

	it('should return the message "EVEN POSITIVE" if the number is even and positive', () => {
		const num = 46
		const result = 'EVEN POSITIVE'
		const op = evenOrOdd(num)
		expect(op).toEqual(result)
	})

	it('should return the message "EVEN POSITIVE" if the number is even and positive', () => {
		const num = 84
		const result = 'EVEN POSITIVE'
		const op = evenOrOdd(num)
		expect(op).toEqual(result)
	})

	it('should return the message "EVEN POSITIVE" if the number is even and positive', () => {
		const num = 20
		const result = 'EVEN POSITIVE'
		const op = evenOrOdd(num)
		expect(op).toEqual(result)
	})

    it('should return the message "EVEN NEGATIVE" if the number is even and negative', () => {
		const num = -34
		const result = 'EVEN NEGATIVE'
		const op = evenOrOdd(num)
		expect(op).toEqual(result)
	})

	it('should return the message "EVEN NEGATIVE" if the number is even and negative', () => {
		const num = -4
		const result = 'EVEN NEGATIVE'
		const op = evenOrOdd(num)
		expect(op).toEqual(result)
	})

	it('should return the message "EVEN NEGATIVE" if the number is even and negative', () => {
		const num = -8
		const result = 'EVEN NEGATIVE'
		const op = evenOrOdd(num)
		expect(op).toEqual(result)
	})

	it('should return the message "EVEN NEGATIVE" if the number is even and negative', () => {
		const num = -94
		const result = 'EVEN NEGATIVE'
		const op = evenOrOdd(num)
		expect(op).toEqual(result)
	})

	it('should return the message "EVEN NEGATIVE" if the number is even and negative', () => {
		const num = -56
		const result = 'EVEN NEGATIVE'
		const op = evenOrOdd(num)
		expect(op).toEqual(result)
	})

    it('should return the message "ODD POSITIVE" if the number is odd and positive', () => {
		const num = 11
		const result = 'ODD POSITIVE'
		const op = evenOrOdd(num)
		expect(op).toEqual(result)
	})

	it('should return the message "ODD POSITIVE" if the number is odd and positive', () => {
		const num = 23
		const result = 'ODD POSITIVE'
		const op = evenOrOdd(num)
		expect(op).toEqual(result)
	})

	it('should return the message "ODD POSITIVE" if the number is odd and positive', () => {
		const num = 71
		const result = 'ODD POSITIVE'
		const op = evenOrOdd(num)
		expect(op).toEqual(result)
	})

	it('should return the message "ODD POSITIVE" if the number is odd and positive', () => {
		const num = 17
		const result = 'ODD POSITIVE'
		const op = evenOrOdd(num)
		expect(op).toEqual(result)
	})

	it('should return the message "ODD POSITIVE" if the number is odd and positive', () => {
		const num = 59
		const result = 'ODD POSITIVE'
		const op = evenOrOdd(num)
		expect(op).toEqual(result)
	})
	
    it('should return the message "ODD NEGATIVE" if the number is odd and negative', () => {
		const num = -1
		const result = 'ODD NEGATIVE'
		const op = evenOrOdd(num)
		expect(op).toEqual(result)
	})

	it('should return the message "ODD NEGATIVE" if the number is odd and negative', () => {
		const num = -47
		const result = 'ODD NEGATIVE'
		const op = evenOrOdd(num)
		expect(op).toEqual(result)
	})

	it('should return the message "ODD NEGATIVE" if the number is odd and negative', () => {
		const num = -9
		const result = 'ODD NEGATIVE'
		const op = evenOrOdd(num)
		expect(op).toEqual(result)
	})

	it('should return the message "ODD NEGATIVE" if the number is odd and negative', () => {
		const num = -21
		const result = 'ODD NEGATIVE'
		const op = evenOrOdd(num)
		expect(op).toEqual(result)
	})

	it('should return the message "ODD NEGATIVE" if the number is odd and negative', () => {
		const num = -33
		const result = 'ODD NEGATIVE'
		const op = evenOrOdd(num)
		expect(op).toEqual(result)
	})
})