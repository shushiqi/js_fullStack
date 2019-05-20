const https = require('https');
const fs = require('fs');
const cheerio = require('cheerio')
// 路径解析模块
const path = require('path');
const url = 'https://weibo.com/u/1625006021?profile_ftype=1&is_ori=1#_0';
const imageDir = './images2/';

https.get(url, (res) => {
  res.setEncoding('utf-8');
  let html = ''
  // 源源不断收到的数据
  res.on('data', (chunk) => {
    html += chunk;
    // console.log(chunk);
  });
  // 数据接收完毕
  res.on('end', () => {
    // 接收完毕 html可使用
    const $ = cheerio.load(html);
    $('.WB_feed_detail').each(function () {
      const picUrl = $('.WB_detail .WB_media_wrap WB_media_a WB_pic img', this).attr('src');
      console.log(picUrl);
      downloadImg(picUrl);
    })
  })
})

function downloadImg(picUrl) {
  https.get(picUrl, (res) => {
    res.setEncoding('binary');
    let imageData = ''
    res.on('data', (chunk) => {
      imageData += chunk;
    })
    res.on('end', () => {
      fs.writeFile(imageDir + path.basename(picUrl), imageData, 'binary', (err) => {
        if (!err) {
          console.log(path.basename(picUrl) + '保存成功');
        } else {
          console.log(path.basename(picUrl) + '下载成功');
        }
      });
    })
  })
}