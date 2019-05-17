const fs = require('fs');
const files = [];
// 一级级走下去
const walk = function(path){
  fs
    .readdirSync(path)
    .forEach(file => {
      const newPath = path + '/' + file;
      const stat = fs.statSync(newPath);
      // console.log(stat);
      if(stat.isFile()){
        if(/\.js$/.test(file)){
          files.push(file);         
        }
      }else if(stat.isDirectory()){
        walk(newPath);
      }
      // console.log(file);
    })
    // fs.readdir(path, function(err, items){
    //   console.log(items)
    // })
    
    console.log('---');
}

walk('./src');
console.log(files);