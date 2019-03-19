## 清除浮动的5种方法
- 在父元素添加底部一个盒子：    
```
<div style="clear:both"></div>  
```
- 给父元素添加属性：
```
overflow: hidden;
```     
hidden/auto/scroll均可触发 块级格式化上下文（BFC）
- 给父元素div添加一个clearfix的类名，使用伪元素after
```
.clearfix::after{
        content: '';
        display: block;
        clear: both;
    }
```
- 给父元素增加一行CSS(不建议使用，会影响后面的元素)，
```
.content{
    float:left;
}
```
- 尼古拉斯大师清除法       
将display设置为table，可以创建一个表格单元，这个匿名的表格单元可以直接触发BFC
```
.clearfix::after{
    content:'';
    display:table;/* 直接触发BFC */
}
```