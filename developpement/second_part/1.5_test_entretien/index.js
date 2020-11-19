for (let i = 1; i <= 100; i++) {
    let modulo_i3 = i%3;
    let modulo_i5 = i%5;
    
    /* if (modulo_i3 === 0 && modulo_i5 === 0) {
        console.log(`${i}fizzbuzz ` )
    }
    else if (modulo_i3 === 0 && modulo_i5 != 0) {
        console.log(`${i}fizz ` )
    }
    else if (modulo_i3 != 0 && modulo_i5 === 0) {
        console.log(`${i}buzz ` )
    }
    else {
        console.log(`${i} ` )
    }*/
    
    // optimisé 
    
    document.querySelector('#id_ul').appendChild(i)
    if (modulo_i3 === 0 ) {
        document.querySelector('#id_ul').appendChild(`fizz ` )
    }
    if (modulo_i5 === 0) {
        document.querySelector('#id_ul').appendChild(`buzz ` )
    }
    
}

