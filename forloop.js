for (let index = 0; index < 10; index++) {              // 0 to 1000 with 100 increments
    console.log(index*100);
}

for (let index = 0; index < 8; index++) {               // index potenssiin 2
    value = Math.pow(2, index);
    console.log(value);
}

for (let index = 0; index < 5; index++) {               // kolme kertaa index
    value = (index+1)*3;
    console.log(value);
}

for (let index = 0; index < 10; index++) {              // numerot 9 nollaan
    value = 9-index;
    console.log(value);
}

for (let index = 0; index < 12; index++) {              // for ja if else yhdessä
    if (index < 3){
        value = 1
    }else if(index < 6){
        value = 2
    }else if(index < 9){
        value = 3
    }else if(index < 12){
        value = 4
    }
    console.log(value);
}

for (let index = 0; index < 15; index++) {              // index modulo 5
    value = index%5;
    console.log(value);
}