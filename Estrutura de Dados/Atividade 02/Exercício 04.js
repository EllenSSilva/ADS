function vetores(n1, n2, n3, array){
    array = []
    array.push(n1, n2, n3)
    for(let i = 0; i < array.length; i++){
        console.log(`índice: ${i}, número: ${array[i]}`)

    }    

}

vetores(1, 2, 3)