// 对象
const googleMap = {
  show(){
    console.log('开始渲染google地图');
  }
}
const baiduMap = {
  show(){
    console.log('开始渲染baidu地图');
  }
}
const gaodeMap = {
  show(){
    console.log('开始渲染gaode地图');
  }
}
const sosoMap = {};
// const renderMap = (type) => {
//   if(type === 'baidu'){
//     baiduMap.show();
//   }else if(type ==='google'){
//     googleMap.show();
//   }else if(type === 'gaode'){
//     gaodeMap.show();
//   }
// }
/**
 * 
 * @param {object} map 
 */
const renderMap = (map) => {
  // map检测
  if(map.show && map.show instanceof Function){
    map.show();
  }
}
renderMap(baiduMap);
renderMap(googleMap);
renderMap(gaodeMap);
renderMap(sosoMap);
