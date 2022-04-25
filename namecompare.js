const names = [];
names.push(process.argv[2])                                 // Get names from console.
names.push(process.argv[3])   
names.push(process.argv[4])

const laskeva = names.sort((a,b) => b.length - a.length);   // Arrange array from longest string to shortest
console.log(laskeva[0]+" "+laskeva[1]+" "+laskeva[2]);      // Print names in array