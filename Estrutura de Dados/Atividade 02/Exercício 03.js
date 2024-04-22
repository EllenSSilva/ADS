let array = []
let rece = function (n1, n2, n3){
    
    array.push(n1, n2, n3)
    
    console.log(array)

    array.reverse()

    console.log(array)
    

}

rece(1, 2, 3)
