## Stylus
    1.不再写css 写的是css预编译语言stylus
    2.快速
    3.一套支持现代css开发的语法
    stylus  style.styl -o style.css
    -o output 输出
    stylus -w  style.styl -o style.css
    -w watch 一直监听style.styl文件的修改，实时生成css文件

## 使用stylus
    1.跟css的规则说byebye （ {} : ;等等）使用tab缩进代替
    2.stylus 提供嵌套
    可以帮我们补上前面的选择器
    我们的css 就模块化了，从此css就有编程的感觉了
    3.&运算符 依然使用tab缩进，但是它与上一级同级，
    特别适用于同一个元素多个类名， .active或者伪类，伪状态
    4.变量定义
    将常用的或者重复使用的 在最上面统一定义后。可以修改一处，所有使用了此变量的地方都会跟着 修改

### css语法
    1.overflow:hidden
    2.flex align-items 搞定vertical-align有时不好弄的地方 vertical-align兄弟之间， 
    3.text-rendering:optimizeLegibility; 抗锯齿（在高清手机上文字的边缘不出现锯齿）
    4.flex-shrink:0 
    flex-grow
    5.第几个元素的选择 :first-child :last-child :nth-child(2n) :nth-child(2n+1)
    6.-apple-system 苹果字体