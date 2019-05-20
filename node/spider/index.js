const https = require('https');
const fs = require('fs');
const cheerio = require('cheerio')
// 路径解析模块
const path = require('path');
const url = 'https://movie.douban.com/top250';
const imageDir = './images/';
// 爬取每一页
function spiderMovies(start) {
  https.get(url + `?start=${start}`, (res) => {
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
      let movies = [];
      const $ = cheerio.load(html);
      $('.item').each(function () {
        const picUrl = $('.pic a img', this).attr('src');
        const title = $('.title', this).text();
        const star = $('.info .star .rating_num', this).text();
        // 入库
        const link = $('a', this).attr('href');
        const movie = {
          title,
          star,
          link,
          picUrl
        }
        console.log(movie);

        movies.push(movie);

        // console.log(picUrl);
        // downloadImg(picUrl);
      })
      // 文件名上标识数据的页数
      saveLocalData(start / 25, movies);
    })
  })
}

const dataDir = './moviesData/';

function saveLocalData(page, movies) {
  fs.writeFile(dataDir + `data${page}.json`, JSON.stringify(movies), (err) => {
    if (!err) {
      console.log('保存成功');
    } else {
      console.log(err);
    }
  });
}

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

  function* doSpider(x) {
    let start = 0;
    while (start < x) {
      yield start;
      spiderMovies(start);
      start += 25;
    }
  }
  for (let x of doSpider(250)) {
    console.log('爬取', x);
  }
}