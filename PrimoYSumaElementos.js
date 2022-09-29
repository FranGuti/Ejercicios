function sumaTotal(arr){

    if(arr.length == 0){
        return 0;
    }

    if(Array.isArray(arr[0])){
        return sumaTotal(arr[0]) + sumaTotal(arr.slice(1));
    }

    return arr[0] + sumaTotal(arr.slice(1));
}

function esPrimo(n){
    if(n == 0 || n == 1 || n == 4){
        return false;
    }

    for(let i = 2; i < (n / 2); i++){
        if (n % i == 0){
            return false;
        }
    }

    return true;

}
