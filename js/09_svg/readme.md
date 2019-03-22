## SVG 矢量图绘制API
    使用数学图形、线、点、圆......
    相比对于由像素、img等构成的，SVG可以无限放大    

- 方向    
- 数据可视化方向
- 代替图片


defs(定义):用于做后台 做准备
use 使用 通过defs里的id绑定
g 组合 id
use href="#" x="" y=""

symbol 模板 viewbox

PATH 定义路径（http://www.w3school.com.cn/svg/svg_path.asp）
下面的命令可用于路径数据：
```
M = moveto
L = lineto
H = horizontal lineto
V = vertical lineto
C = curveto
S = smooth curveto
Q = quadratic Belzier curve
T = smooth quadratic Belzier curveto
A = elliptical Arc
Z = closepath
注释：以上所有命令均允许小写字母。大写表示绝对定位，小写表示相对定位。
```
结束时使用Z结束

##
html是处理文本的排列和显示的
SVG 是用来处理图形的
