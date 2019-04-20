let data = [
  {value: '青春修炼手册😘', time:5, color:'red', speed:1, fontSize:22},
  {value: '是露露小螃蟹呀', time:15, color:'blue', speed:0.5, fontSize:24},
  {value: '嘻嘻嘻', time:10, color:'green', speed:1, fontSize:22},
  {value: '来玩呀', time:25, color:'pink', speed:1, fontSize:22},
  {value: '有点强', time:12},
  {value: 'Mei', time:16},
  {value: 'Widowmaker', time:5},
  {value: '帅帅帅', time:24},
  {value: 'AWSL', time:16},
  {value: '前方高能', time:15},
  {value: '第一次发弹幕', time:30}
]

// 获取所有需要的dom结构
let doc = document;
let canvas = doc.getElementById('canvas');
let video = doc.getElementById('video');
let $txt = doc.getElementById('text');
let $btn = doc.getElementById('btn');
let $color = doc.getElementById('color');
let $range = doc.getElementById('range');

//创建一个CanvasBarrage的类
class CanvasBarage {
  // opt={} 没有数据 ''作为默认值
  constructor(canvas, vidoe, opt={}){
    // 如果canvas和video都没有传参的话
    if(!canvas || !video){
      return;
    }
    // 给构造器添加属性 挂载到this上
    this.video = video;
    this.canvas = canvas;

    this.canvas.width = video.width;
    this.canvas.height = video.height;
    
    // 获取画布
    this.ctx = canvas.getContext('2d');

    // 设置默认参数 如果没有传参就用默认值
    let defOpts = {
      color: '#e91e63',
      speed: 1.5,
      opacity: 0.5,
      fontSize: 20,
      data: []
    };

    // 合并对象， 全部挂载到this实例上
    Object.assign(this, defOpts, opt);
    // 添加属性 用来判断播是放状态， 默认true是暂停
    this.isPaused = true;
    // 获取所有的弹幕消息
    this.barrages = this.data.map(item => new Barrage(item, this))
    // 渲染弹幕
    this.render();
  }
// function render(){}
  render(){
    // 渲染的第一步清除原来的画布
    this.clear();
    // 渲染弹幕
    this.renderBarrage();
    // 如果没有暂停就继续渲染
    if(this.isPaused === false){
      requestAnimationFrame(this.render.bind(this));
    }
  }
  clear(){
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  renderBarrage(){
    // 要根据当前视频播放的时间和弹幕展示的时间作比较 来判断是否展示弹幕
    let time = this.video.currentTime;

    this.barrages.forEach(barrage => {
      // 只有在播放时间大于等于弹幕展示的时间才做处理
      if(!barrage.flag && time >= barrage.time){
        // 判断当前弹幕是否初始化
        if(!barrage.isInit){
          barrage.init();
          barrage.isInit = true;
        }

        // 弹幕从右往左渲染 所以X坐标减去当前弹幕的speed
        barrage.x -= barrage.speed;
        barrage.render(); //渲染当前弹幕

        // 如果当前弹幕的x坐标， 则渲染结束
        if(barrage.x < -barrage.width){
          barrage.flag = true;
        }
      }
    })
  }
  add(obj){
    this.barrages.push(new Barrage(obj, this))
  }
    
}

// 创建Barrage类 用来实例化每一条弹幕
class Barrage{
  constructor(obj, ctx){
    this.value = obj.value;
    this.time = obj.time;
    // 把obj和ctx都挂载到this上， 方便获取
    this.obj = obj;
    this.context = ctx;
  }
  // 初始化弹幕
  init(){
    // 如果数据里没有下面4种参数，则取默认值
    this.color = this.obj.color || this.context.color;
    this.speed = this.obj.speed || this.context.speed;
    this.opacity = this.obj.opacity || this.context.opacity;
    this.fontSize = this.obj.fontSize || this.context.fontSize;

    // 为了计算每条弹幕的宽度，创建一个元素p，然后计算文字的宽度
    let p =document.createElement('p');
    p.style.fontSize = this.fontSize + 'px';
    p.innerHTML = this.value;
    document.body.appendChild(p);
    this.width = p.clientWidth;
    document.body.removeChild(p);

    //设置弹幕出现的位置
    this.x = this.context.canvas.width;
    this.y = this.context.canvas.height * Math.random();

    // 超出范围的处理
    if(this.y < this.fontSize){
      this.y = this.fontSize;
    }else if(this.y > this.context.canvas.height - this.fontSize){
      this.y = this.context.canvas.height - this.fontSize;
    }
  }
  // 渲染每一条弹幕
  render(){
    // 设置画布、文字和字体
    this.context.ctx.font = `${this.fontSize}px Arial`;
    // 设置画布的文字颜色
    this.context.ctx.fillStyle = this.color;
    // 绘制文字
    this.context.ctx.fillText(this.value, this.x, this.y);
  }
  
}

let canvasBarrage = new CanvasBarage(canvas, video, {data});
// 设置video的play事件来调用CanvasBarrage实例的render方法
video.addEventListener('play', () => {
  canvasBarrage.isPaused = false;
  canvasBarrage.render();//触发弹幕
})
// 发送弹幕的方法
function send() {
  let value = $txt.value;  // 输入的内容
  let time = video.currentTime; // 当前视频时间
  let color = $color.value;   // 选取的颜色值
  let fontSize = $range.value; // 选取的字号大小
  let obj = { value, time, color, fontSize };
  // 添加弹幕数据
  canvasBarrage.add(obj);
  $txt.value = ''; // 清空输入框
}
// 点击按钮发送弹幕
$btn.addEventListener('click', send);
// 回车发送弹幕
$txt.addEventListener('keyup', e => {
  let key = e.keyCode;
  key === 13 && send();
});
