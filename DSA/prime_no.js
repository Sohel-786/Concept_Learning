function prime_no(num){
    for(let i = 2; i< num ; i++){
        if(num%i==0){
            return "Not Prime";
        }
    }
    return "Prime";
}

console.log(prime_no(11));
