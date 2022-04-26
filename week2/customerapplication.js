const x = require('readline')
var z = x.createInterface({
input: process.stdin,
output: process.stdout
})
z.question('Kuinka mones kävijä tänään? ', (y) => {
if (y >= 1000 && y % 25 === 0) {
console.log('Saa ilmapallon!')
} else if (y % 2000 === 0 && y !== 0 ) {
console.log('Saa lahjakortin!!!')
} else if (y % 2000 !== 0 || (y < 1000 && y % 25 !== 0)) {
console.log('Ei saa mitään. :(')
}
z.close()
})