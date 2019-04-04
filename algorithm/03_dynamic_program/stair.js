function fun(n){
    if(n < 0) return 0
    if(n === 1) return 1
    if(n === 2) return 2

    return fun(n-1) + fun(n-2);
}

function lou(n){
    if(n < 0) return 0;
    if(n === 1) return 1;
    if(n === 2) return 2;

    var a = 1;
    var b = 2;
    var temp = 0;
    for(var i = 3;i <= n;i++){
        temp = a + b;
        a = b;
        b = temp;
    }
    return temp
}

console.log("12级台阶走法" + fun(12));
console.log("12级台阶走法优化" + lou(12))