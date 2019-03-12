let qq_number = 631758924;

// 函数表达书
/**
 * 
 * @param {*} qq
 * @return true boolean
 * @功能 判断qq是否合格
 * @desc 只能是数字，长度为5位以上 13位以内
 */
const is_valid_qq = (qq) => {
    // console.log(qq);
    // if(!qq) return false;
   if(/^\d{5,13}$/.test(qq)){
       return true;
   } else {
       return false;
   };
    // return true;
};
console.log(is_valid_qq(qq_number));

// 选择了一种数据结构，数组
let enc_qq = [6,3,1,7,5,8,9,2,4],qq = [],
head = 0, //指针 start 开始
tail = 9; //尾部指针 
while(head < tail){
    // 1.在qq[]中存入第一个数
qq.push(enc_qq[head]);
head++;
// 第二个数移到队尾
enc_qq[tail] = enc_qq[head]

head++;
tail++;
}
console.log(qq);
