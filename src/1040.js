class WeightedAverage {
	#grade1
	#grade2
	#grade3
	#grade4
	#exam
	constructor(grade1, grade2, grade3, grade4, exam) {
		this.#grade1 = grade1;
		this.#grade2 = grade2;
		this.#grade3 = grade3;
		this.#grade4 = grade4;
		this.#exam = exam;
	}

	getAverage() {
		const sumWeights = 2 + 3 + 4 + 1
		const sumGrades = ((this.#grade1 * 2) + (this.#grade2 * 3) + (this.#grade3 * 4) + (this.#grade4 * 1))
		const average = sumGrades / sumWeights
		if(average >= 7.0) return 'Aluno aprovado'
		if(average < 5.0) return 'Aluno reprovado'
        if(average >= 5.0 && average <= 6.9) {
			const newAverage = (this.#exam + average) / 2
			return newAverage >= 5.0 ? 'Aluno aprovado' : 'Aluno reprovado'
		}
	}
}

module.exports = WeightedAverage