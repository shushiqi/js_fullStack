var baseObj = {
  // 随机数
  randonNum:  function(min, max){
    return parseInt(Math.random() * (max - min + 1) + min)
  }
}