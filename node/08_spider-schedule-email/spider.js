const superagent = require('superagent')
const cheerio = require('cheerio')
const ejs = require('ejs')
const fs = require('fs')
const nodemailer = require('nodemailer'); //发送邮件的node插件

const local = 'jiangxi/qingshanhu-district'
const weatherBaseUrl = 'https://tianqi.moji.com/weather/china/'

const getWeatherData = () => {
  return new Promise((resolve, reject) => {
    superagent.get(`${weatherBaseUrl}${local}`).end((err, res) => {
      if (err) {
        console.log(err);
        reject(err)
      }
      resolve(res)
      // console.log(res.text);
      let weatherTip = "";
      let $ = cheerio.load(res.text);
      // 今日天气提示
      $(".wea_tips").each(function (i, elem) {
        weatherTip = $(elem)
          .find("em")
          .text();
      });
      // 最近三日天气信息
      let threeDaysData = [];
      $(".forecast .days").each(function (i, elem) {
        const SingleDay = $(elem).find("li");
        const Day = $(SingleDay[0]).text().replace(/\s/g, "");
        const WeatherText = $(SingleDay[1]).text().replace(/\s/g, "");
        const Temperature = $(SingleDay[2]).text().replace(/\s/g, "");
        const WindDirection = $(SingleDay[3]).find("em").text().replace(/\s/g, "");
        const WindLevel = $(SingleDay[3]).find("b").text().replace(/\s/g, "");
        const Pollution = $(SingleDay[4]).text().replace(/\s/g, "");
        const PollutionLevel = $(SingleDay[4]).find("strong").attr("class");
        threeDaysData.push({
          Day,
          WeatherText,
          Temperature,
          WindDirection,
          WindLevel,
          Pollution,
          PollutionLevel
        });
        // console.log(threeDaysData)
        resolve({
          weatherTip,
          threeDaysData
        })
      });
      // console.log(weatherTip)
    })
  })

  const getOneData = () => {
    const oneUrl = 'http://wufazhuce.com/'
    let p = new Promise(function (resolve, reject) {
      superagent.get(OneUrl).end(function (err, res) {
        if (err) {
          reject(err);
        }
        let $ = cheerio.load(res.text);
        let selectItem = $("#carousel-one .carousel-inner .item");
        let todayOne = selectItem[0];
        let todayOneData = {
          type: $(todayOne)
            .find(".fp-one-imagen-footer")
            .text()
            .replace(/\s/g, ''),
          text: $(todayOne)
            .find(".fp-one-cita")
            .text()
            .replace(/\s/g, '')
        };
        resolve(todayOneData)
      });
    })
    return p
  }
  // console.log(todayOneData);
  // 聚合数据
  function getAllDataAndSendEmail() {
    let htmlData = {};
    Peomise.all([getWeatherData(), getOneData()]).then(allData => {
      // console.log(allData);
      const [weather, one] = allData
      sendEmail(weather, one);

    })
  }

  function sendEmail(weather, one) {
    const template = ejs.compile(
      fs.readFile('./email.ejs', 'utf8')
    )
    const html = template({
      weatherTip: weather.weatherTip,
      threeDaysData: weather.threeDaysData
    })

    const transporter = nodemailer.createTransport({
      service: 'qq', // 发送者的邮箱厂商，支持列表：https://nodemailer.com/smtp/well-known/
      port: 465, // SMTP 端口
      secureConnection: true, // SSL安全链接
      auth: { //发送者的账户密码
        user: '1539588925@qq.com', //账户
        pass: 'gxklscvktpblibhf', //smtp授权码，到邮箱设置下获取
      }
    });

    transporter.sendMail({
      from: '"舒十七" <1539588925@qq.com>', // 发送者昵称和地址
      to: 'ricardoliu04@gamil.com', // 接收者的邮箱地址
      subject: 'weather', // 邮件主题
      html 
    },(err, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('邮件发送成功 ID：', info);
    })

  }
  getAllDataAndSendEmail()
}