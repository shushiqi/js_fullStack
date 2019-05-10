## html2canvas
  用于移动端分享    
  小程序不能直接分享到朋友圈    
  使用html2cabnvas 将网页或部分网页转成canvas 

```
 html2canvas(dom, {
    onredered: function(canvas){
      显示，css
    }
  })
```