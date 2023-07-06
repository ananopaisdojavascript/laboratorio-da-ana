const WeightedAverage = require('../src/1040')
describe('weighted average', () => {
	it('should return the message "Aluno reprovado"', () => {
		const grade1 = 2.0
		const grade2 = 6.5
		const grade3 = 4.0
		const grade4 = 9.0
		const result = "Aluno reprovado"
		const op = new WeightedAverage(grade1, grade2, grade3, grade4).getAverage()
		expect(op).toEqual(result)
	})

	it('should return the message "Aluno aprovado"', () => {
		const grade1 = 9.0
		const grade2 = 4.0
		const grade3 = 8.5
		const grade4 = 9.0
		const result = "Aluno aprovado"
		const op = new WeightedAverage(grade1, grade2, grade3, grade4).getAverage()
		expect(op).toEqual(result)
	})

	it('should return the message "Aluno aprovado"', () => {
		const grade1 = 1.0
		const grade2 = 10.0
		const grade3 = 10.0
		const grade4 = 0.0
		const result = "Aluno aprovado"
		const op = new WeightedAverage(grade1, grade2, grade3, grade4).getAverage()
		expect(op).toEqual(result)
	})

	it('should return the message "Aluno aprovado"', () => {
		const grade1 = 10.0
		const grade2 = 10.0
		const grade3 = 10.0
		const grade4 = 10.0
		const result = "Aluno aprovado"
		const op = new WeightedAverage(grade1, grade2, grade3, grade4).getAverage()
		expect(op).toEqual(result)
	})

	it('should return the message "Aluno reprovado"', () => {
		const grade1 = 3.7
		const grade2 = 8.9
		const grade3 = 1.0
		const grade4 = 5.4
		const result = "Aluno reprovado"
		const op = new WeightedAverage(grade1, grade2, grade3, grade4).getAverage()
		expect(op).toEqual(result)
	})

	it('should return the message "Aluno reprovado"', () => {
		const grade1 = 0.0
		const grade2 = 1.0
		const grade3 = 9.2
		const grade4 = 10
		const result = "Aluno reprovado"
		const op = new WeightedAverage(grade1, grade2, grade3, grade4).getAverage()
		expect(op).toEqual(result)
	})

	it('should return the message "Aluno aprovado"', () => {
		const grade1 = 2.0
		const grade2 = 4.0
		const grade3 = 7.5
		const grade4 = 8.0
		const examGrade = 6.4
		const result = "Aluno aprovado"
		const op = new WeightedAverage(grade1, grade2, grade3, grade4, examGrade).getAverage()
		expect(op).toEqual(result)
	})

	it('should return the message "Aluno aprovado"', () => {
		const grade1 = 10.0
		const grade2 = 10.0
		const grade3 = 0.0
		const grade4 = 0.0
		const examGrade = 5.0
		const result = "Aluno aprovado"
		const op = new WeightedAverage(grade1, grade2, grade3, grade4, examGrade).getAverage()
		expect(op).toEqual(result)
	})

	it('should return the message "Aluno reprovado"', () => {
		const grade1 = 10.0
		const grade2 = 10.0
		const grade3 = 0.0
		const grade4 = 0.0
		const examGrade = 4.9
		const result = "Aluno reprovado"
		const op = new WeightedAverage(grade1, grade2, grade3, grade4, examGrade).getAverage()
		expect(op).toEqual(result)
	})

	it('should return the message "Aluno aprovado"', () => {
		const grade1 = 10.0
		const grade2 = 10.0
		const grade3 = 0.0
		const grade4 = 10.0
		const examGrade = 4.0
		const result = "Aluno aprovado"
		const op = new WeightedAverage(grade1, grade2, grade3, grade4, examGrade).getAverage()
		expect(op).toEqual(result)
	})
})

