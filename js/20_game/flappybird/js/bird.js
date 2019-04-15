var bird = {
  flyTimer: null,//小鸟飞翔定时器
  wingTimer: null,//小鸟翅膀摆动定时器

  div:document.createElement("div"),
  showBird:function(parentObj){
    this.div.style.width = "40px";
    this.div.style.height = "28px";
    this.div.style.backgroundImage = "url(images/bird0.png";
    this.div.style.backgroundRepeat = "no-repeat";
    this.div.style.position = "absolute";
    this.div.style.left = "50px";
    this.div.style.top = "200px";
    this.div.style.zIndex = "1";

    parentObj.appendChild(this.div);//将小鸟插入到父级容器中
  },
  fallSpeed: 0,//下降速度
  flyBird:function(){//控制小鸟飞行时下落的函数
    bird.flyTimer = setInterval(fly, 40)
    function fly(){
      bird.div.style.top = bird.div.offsetTop + bird.fallSpeed++ + "px";
      if(bird.div.offsetTop < 0){
        bird.fallSpeed = 2; //控制小鸟不超出界面
      }
      if(bird.div.offsetTop >=395){
        bird.fallSpeed = 0;
        clearInterval(bird.flyTimer);//掉到地面 清除定时器
        clearInterval(bird.wingTimer);
      }
      if(bird.fallSpeed > 12){
        bird.fallSpeed = 12;//小鸟下落的速度最大控制为12
      }
    }
  },
  wingWave: function(){//控制小鸟翅膀扇动
    var up = ["url(images/up_bird0.png", "url(images/up_bird1.png"];
    var down = ["url(images/down_bird0.png", "url(images/down_bird1.png"];
    var i = 0, j = 0;
    function wing(){
      if(bird.fallSpeed > 0){
        bird.div.style.backgroundImage = down[i++];
        if(i == 2){i = 0};
      }
      if(bird.fallSpeed < 0){
        bird.div.style.backgroundImage = up[i++];
        if(j == 2){j = 0};
      }
    }
    setInterval(wing, 120);
  }
}