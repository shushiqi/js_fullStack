## 如何实现红包算法
固定金额的红包，由若干人来抢  分发规则？    
- 1.抢到的金额之和应等于红包金额，
- 2.手气王 至少0.01
- 3.金额随机， 随机数  公平性：每个人抢到金额的概率相同

计算过程， 变量计算的本质   

```
总和 total  剩下的金额 restAmount   
最初 total = restAmount 
剩余红包数 restnum  
随机一次 restAmount = total - 随机数    
最后一个人，获得最后所有的钱 for(i = 0;i < num-1;i++)   
每次随机 钱数是需要的 push到数组里
```
Math 是数学对象
- Math.random() 产生随机数
- parseFloat() 将一个number解析为浮点数     
类型转换 "23.1" =>  23.1
- .toFixed() 限定小数位数
最大与最小之间的数：min + Math.floor(Math.random()*(max-min));