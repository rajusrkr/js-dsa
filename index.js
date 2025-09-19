function getFibNums(n){
    // 0, 1, 1, 2, 3, 5, 8 => sum of prev two is the new fib num
    
    let firstNum = 0;
    let secondNum = 1;
    let nextNum;
    // print first two fib nums
    console.log(firstNum);
    console.log(secondNum);


    for(let i = 2; i<= n; i++){
        nextNum = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = nextNum;
        console.log(nextNum);
    }
}

getFibNums(20)