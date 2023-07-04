const perfectNumber = num => {
    const mult = []

	for(let i = 1; i < num; i++) {
	    if(num % i === 0) {
	        mult.push(i)
	    }
	}

	const sum = mult.reduce((acc, value) => acc + value, 0)

	return sum === num ? `${num} eh perfeito` : `${num} nao eh perfeito`
}

module.exports = perfectNumber;