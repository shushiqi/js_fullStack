const htmlStr = `<p> <em>lorem</em> <strong>ipsum</strong> </p>`

// function getSimpleText(html){
//   var re1 = new RegExp("<.+?>","g");//匹配html标签的正则表达式，"g"是搜索匹配多个符合的内容
//   var msg = html.replace(re1,'');//执行替换成空字符
//   return msg;
//   }
//   console.log(getSimpleText(htmlStr))

const stripHTMLTags = str => str.replace(/<[^>]*/g, '')

