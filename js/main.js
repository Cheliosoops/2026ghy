var appIndex = new Vue({
  el: '#appIndex',
  data: {
    datalist: {},
    year: '',
    month: '',
    date: '',
    hour: '',
    minute: '',
    second: '',
    strDate: '',
    weather_curr: '',
    weather_icon: ''
  },
  methods: {
    getWeath: function() {
      var _this = this
      $.ajax({
        url:
          'http://api.k780.com:88/?app=weather.today&weaid=101160101&appkey=10003&sign=b59bc3ef6191eb9f747dd4e83c99f2a4&format=json&jsoncallback=?',
        dataType: 'jsonp',
        type: 'Post',
        jsonpCallback: 'jsonpCallback',
        success: function(data) {
          _this.weather_icon = data.result.weather_icon
          _this.weather_curr = data.result.weather_curr
          console.log(data)
        }
      })
    },
    timeFormate: function(timeStamp) {
      var today
      var strDate
      today = new Date()
      var n_day = today.getDay()
      switch (n_day) {
        case 0:
          {
            strDate = '星期日'
          }
          break
        case 1:
          {
            strDate = '星期一'
          }
          break
        case 2:
          {
            strDate = '星期二'
          }
          break
        case 3:
          {
            strDate = '星期三'
          }
          break
        case 4:
          {
            strDate = '星期四'
          }
          break
        case 5:
          {
            strDate = '星期五'
          }
          break
        case 6:
          {
            strDate = '星期六'
          }
          break
        case 7:
          {
            strDate = '星期日'
          }
          break
      }
      var year = new Date(timeStamp).getFullYear()
      var month =
        new Date(timeStamp).getMonth() + 1 < 10
          ? '0' + (new Date(timeStamp).getMonth() + 1)
          : new Date(timeStamp).getMonth() + 1
      var date =
        new Date(timeStamp).getDate() < 10
          ? '0' + new Date(timeStamp).getDate()
          : new Date(timeStamp).getDate()
      var hour =
        new Date(timeStamp).getHours() < 10
          ? '0' + new Date(timeStamp).getHours()
          : new Date(timeStamp).getHours()
      var minute =
        new Date(timeStamp).getMinutes() < 10
          ? '0' + new Date(timeStamp).getMinutes()
          : new Date(timeStamp).getMinutes()
      var second =
        new Date(timeStamp).getSeconds() < 10
          ? '0' + new Date(timeStamp).getSeconds()
          : new Date(timeStamp).getSeconds()
      this.year = year
      this.month = month
      this.date = date
      this.hour = hour
      this.minute = minute
      this.second = second
      this.strDate = strDate
    }
  },
  mounted() {
    var _this = this // 声明一个变量指向Vue实例this，保证作用域一致
    this.timer = setInterval(() => {
      //   _this.date = new Date() // 修改数据date
      _this.timeFormate(new Date())
    }, 1000)
    console.log(666, this.datalist)
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer) // 在Vue实例销毁前，清除我们的定时器
    }
  },
  created: function() {
   // this.getWeath()
    // this.init()
    // console.log(this.datalist)
  }
})
$(function() {
  $('#FontScroll').FontScroll({ time: 2000, num: 1 })
  $('.timer').countTo({
    lastSymbol: '', //显示在最后的字符
    from: 0, // 开始时的数字
    speed: 2000, // 总时间
    refreshInterval: 10, // 刷新一次的时间
    beforeSize: 0, //小数点前最小显示位数，不足的话用0代替
    decimals: 0, // 小数点后的位数，小数做四舍五入
    onUpdate: function() {}, // 更新时回调函数
    onComplete: function() {
      for (i in arguments) {
        console.log(arguments[i])
      }
    }
  })
  $('.wbfgl').countTo({
    lastSymbol: '%', //显示在最后的字符
    from: 0, // 开始时的数字
    speed: 2000, // 总时间
    refreshInterval: 10, // 刷新一次的时间
    beforeSize: 0, //小数点前最小显示位数，不足的话用0代替
    decimals: 0, // 小数点后的位数，小数做四舍五入
    onUpdate: function() {}, // 更新时回调函数
    onComplete: function() {
      for (i in arguments) {
        console.log(arguments[i])
      }
    }
  })
  let isDO = true; // 状态标识

  function sbxanim() {
    $('.sbxanim').countTo({
      lastSymbol: '',
      from: isDO ? 15 : 25,
      speed: 1000,
      refreshInterval: 100,
      beforeSize: 0,
      decimals: 0,
      onComplete: function() {
        $('.sbxanim').text(isDO ? "35" : "69");
        $('.sbwxtext').text(isDO ? "TN" : "DO");
        isDO = !isDO;
        setTimeout(sbxanim, 3000);
      }
    });
  }

  sbxanim();
})

function updateTongjiBox(info) {
  var tongjiBox = document.querySelector(".tongjibox"); // 获取 tongjibox 容器
  if (tongjiBox) {
    tongjiBox.innerHTML = `
      <div style="
        color: white; 
        background-color: rgba(0, 0, 0, 0.8); 
        padding: 15px; /* 减少内边距，避免内容溢出 */
        border-radius: 10px; 
        font-family: Arial, sans-serif; 
        font-size: 14px; 
        line-height: 1.8; 
        border: 1px solid #4a90e2;
        text-align: center;">
        
        <!-- 标题部分 -->
        <h3 style="
          color: #4a90e2; 
          font-size: 20px; /* 缩小标题字体 */
          margin-bottom: 10px; 
          text-align: center;">
          河湾水质信息
        </h3>
        <h4 style="
          color: white; 
          font-size: 14px; 
          margin-bottom: 15px; 
          text-align: center;">
          白色方块代表该点缺少数据
        </h4>

        <!-- 水质类别部分 -->
        <div style="
          font-size: 18px; /* 缩小字体以适应容器 */
          color: #FFD700; 
          font-weight: bold; 
          margin: 15px 0; /* 缩小上下间距 */
          text-shadow: 0px 0px 4px rgba(255, 215, 0, 0.8);">
          水质类别：${info.details.水质类别}
        </div>

        <hr style="border: 0; height: 1px; background: #4a90e2; margin: 10px 0;"> <!-- 缩小分隔线间距 -->

        <!-- 基本信息部分 -->
        <div style="margin: 0 auto; text-align: left; display: inline-block;">
          <div style="margin-bottom: 8px;"><strong>流域名称：</strong> ${info.basin}</div>
          <div style="margin-bottom: 8px;"><strong>断面名称：</strong> ${info.name}</div>
          <div style="margin-bottom: 8px;"><strong>经纬度：</strong> ${info.point}</div>
        </div>

        <hr style="border: 0; height: 1px; background: #4a90e2; margin: 15px 0;">

        <!-- 水质数据部分 -->
        <div style="margin: 0 auto; text-align: left; display: inline-block; line-height: 1.6;">
          <div style="margin-bottom: 8px;"><strong>化学需氧量：</strong> ${info.details.化学需氧量} mg/L</div>
          <div style="margin-bottom: 8px;"><strong>氨氮：</strong> ${info.details.氨氮} mg/L</div>
          <div style="margin-bottom: 8px;"><strong>总磷：</strong> ${info.details.总磷} mg/L</div>
          <div style="margin-bottom: 8px;"><strong>氟化物：</strong> ${info.details.氟化物} mg/L</div>
          <div style="margin-bottom: 8px;"><strong>总氮：</strong> ${info.details.总氮} mg/L</div>
        </div>
      </div>
    `;
  }
}

let currentIndex = 0;
const slider = document.querySelector('.image-slider');
const images = document.querySelectorAll('.image-slider img');
const totalImages = images.length;

function slideNext() {
  currentIndex = (currentIndex + 1) % totalImages;
  const offset = -currentIndex * 100;
  slider.style.transform = `translateX(${offset}%)`;
}

setInterval(slideNext, 5000);







