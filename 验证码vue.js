import apis from 'apis'
let captcha = {
  methods: {
    /*验证码*/
    guid() {
      function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
      }
      return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
    },
    genCaptcha() {
      let captchaId = localStorage.getItem('captchaId')
      if (!captchaId) captchaId = this.guid()
      localStorage.setItem('captchaId', captchaId)
      apis.genCaptcha(captchaId)
        .then(res => {
          if (res.body.result_code === 1) {
            this.$nextTick(() => {
              this.drawPic(res.body.result)
            })
          }
        })
        .catch(e => console.log(e))
    },
    refresh() {
      this.genCaptcha()
    },
    // 生成一个随机数
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    // 随机颜色
    randomColor(min, max) {
      var r = this.randomNum(min, max);
      var g = this.randomNum(min, max);
      var b = this.randomNum(min, max);
      return "rgb(" + r + "," + g + "," + b + ")";
    },
    /**绘制验证码图片**/
    drawPic(str) {
      var canvas = this.$refs.canvas
      var width = canvas.width;
      var height = canvas.height;
      var ctx = canvas.getContext('2d');
      ctx.textBaseline = 'bottom';
      /**绘制背景色**/
      ctx.fillStyle = this.randomColor(180, 240); //颜色若太深可能导致看不清
      ctx.fillRect(0, 0, width, height);

      /**绘制文字**/
      // var str = 'ABCEFGHJKLMNPQRSTWXY123456789';
      for (var i = 0; i < 4; i++) {
        var txt = str[i];
        ctx.fillStyle = this.randomColor(50, 160);  //随机生成字体颜色
        ctx.font = this.randomNum(30, 40) + 'px SimHei'; //随机生成字体大小
        var x = 10 + i * 26;
        var y = this.randomNum(35, 40);
        var deg = this.randomNum(-25, 25);
        //修改坐标原点和旋转角度
        ctx.translate(x, y);
        ctx.rotate(deg * Math.PI / 180);
        ctx.fillText(txt, 0, 0);
        //恢复坐标原点和旋转角度
        ctx.rotate(-deg * Math.PI / 180);
        ctx.translate(-x, -y);
      }
      /**绘制干扰线**/
      for (var i = 0; i < 3; i++) {
        ctx.strokeStyle = this.randomColor(40, 180);
        ctx.beginPath();
        let x = this.randomNum(0, width)
        let y = this.randomNum(0, height)
        ctx.moveTo(x, y);
        ctx.lineTo(this.randomNum(x - 30, x + 30), this.randomNum(y - 30, y + 30));
        ctx.stroke();
      }
      // // /**绘制干扰点**/
      for (var i = 0; i < 10; i++) {
        ctx.fillStyle = this.randomColor(0, 255);
        ctx.beginPath();
        ctx.arc(this.randomNum(0, width), this.randomNum(0, height), 1, 0, 2 * Math.PI);
        ctx.fill();
      }
    }
  }
}

export default captcha