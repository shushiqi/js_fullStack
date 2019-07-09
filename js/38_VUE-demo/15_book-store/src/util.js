import config from './config'

export function getData(url){
  return new Promise((resolve, reject)=>{
    wx.request({
      // data,
      url: config.movieHost+url,
      success:function(res){        
        if(res.statusCode == 200){
          resolve(res.data)
        }else{
          reject(error)
        }
          
      }
    })
  })
}