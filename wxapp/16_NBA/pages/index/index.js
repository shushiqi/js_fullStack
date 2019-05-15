//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    gameDate: [
      {
      id: 'd22',
      time: '05月15日'
    },
    {
      id: 'd23',
      time: '05月13日'
    },
    {
      id: 'd24',
      time: '05月24日'
    },
    {
      id: 'd25',
      time: '06月07日'
    }

  ],
    gameResult: [{
    id: 'd22',
    leftteam: "https://mat1.gtimg.com/sports/nba/logo/new/22.png",
    leftgrade: 119,
    leftname: '开拓者',
    rightteam: "https://mat1.gtimg.com/sports/nba/logo/1602/9.png",
    rightgrade: 120,
    rightname: '勇士',
  },
  {
    id: 'd23',
    leftteam: "https://mat1.gtimg.com/sports/nba/logo/1602/20.png",
    leftgrade: 90,
    leftname: '76人',
    rightteam: "https://img1.gtimg.com/sports/pics/hv1/133/21/2268/147482188.png",
    rightgrade: 92,
    rightname: '猛龙',
  },
  {
    id: 'd24',
    leftteam: "https://mat1.gtimg.com/sports/nba/logo/1602/9.png",
    leftgrade: 118,
    leftname: '勇士',
    rightteam: "https://mat1.gtimg.com/sports/nba/logo/1602/10.png",
    rightgrade: 113,
    rightname: '火箭',
  },
  {
    id: 'd25',
    leftteam: "https://mat1.gtimg.com/sports/nba/logo/1602/9.png",
    leftgrade: 95,
    leftname: '勇士',
    rightteam: "https://mat1.gtimg.com/sports/nba/logo/1602/15.png",
    rightgrade: 89,
    rightname: '雄鹿',
  }],
    current: 0,
    agenda: {},  
  },
  // 向左切换
  turnLeft(){
    let {current} =this.data;
    if(current <= 0) return false;
    current--;
    this.setData({
      current
    })
  },
  // 向右切换
  turnRight(){
    let {current, gameDate} =this.data;
    if(current >= gameDate.length - 1) return false;
    current++;
    this.setData({
      current
    })
    this.handleAgendaDate();
  },
  handleAgendaDate(){
    // date 时间数组 result 比赛结果数组 =>id
    let {current,gameDate, gameResult} =this.data;
    let {id} = gameDate[current];
    const agenda = gameResult.find(item => id === item.id);
    if(agenda){
      this.setData({
        agenda
      })
    }
  },

  onLoad: function(){
    this.handleAgendaDate();
  }
})
