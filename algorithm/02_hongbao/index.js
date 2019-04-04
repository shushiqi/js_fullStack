function hongbao(total, num) {
    const arr = [];
    let restAmount = total; //余额初始化为总金额
    let restNum = num;

    for (let i = 0;i < num-1;i++) {
    // 剩余最后一个不加入计算
    // 平均值的2倍
    let amount = parseFloat(Math.random() * (restAmount/restNum * 2)).toFixed(2);//随机数
    restAmount -= amount;
    restNum--;
    arr.push(amount);
    }
    arr.push(restAmount.toFixed(2));

    return arr;
}

console.log(hongbao(3,4));
