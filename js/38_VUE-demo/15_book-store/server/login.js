
function getCode(){
  wx.login({
    success: (loginRes)=>{
      if(loginRes.code){
        console.log(loginRes)
      }
    }
  }); 
}
getCode()