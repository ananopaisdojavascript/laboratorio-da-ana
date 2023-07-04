const evenOrOdd = num => ({
	[num === 0]: 'NULL',
    [num % 2 === 0 && num > 0]: 'EVEN POSITIVE',
    [num % 2 === 0 && num < 0]: 'EVEN NEGATIVE',
    [num % 2 !== 0 && num > 0]: 'ODD POSITIVE',
    [num % 2 !== 0 && num < 0]: 'ODD NEGATIVE'
})[true]

module.exports = evenOrOdd