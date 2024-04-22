let array = []

function arrayVazio (n1, n2, n3){
    
    array.push(n1, n2, n3);

    if (n1 < n2 && n2 < n3) {
        console.log(`${n1}, ${n2}, ${n3}`)
    }
    
    if (n1 > n2 && n2 > n3) {
        console.log(`${n3}, ${n2}, ${n1}`)
    }

    if (n3 > n1 && n1 > n2) {
        console.log(`${n2}, ${n1}, ${n3}`)
    }

    if (n2 > n3 && n3 > n1) {
        console.log(`${n1}, ${n3}, ${n2}`)
    }

}

arrayVazio(1,5,3)