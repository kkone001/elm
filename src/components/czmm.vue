<template>
  <div>
    <div id="head">
      <img @click="go()" class="img" src="../../static/imgs/left.png" alt>
      <span class="loginPW">重置密码</span>
    </div>
    <br>
    <div>
      <input class="user" v-model="username" placeholder="账号" type="text">
      <br>
      <input class="oldpassWord" v-model="oldpassWord" placeholder="旧密码" type="text">
      <br>
      <input class="newpassword" v-model="newpassword" placeholder="请输入新密码" type="text">
      <br>
      <input class="confirmpassword" v-model="confirmpassword" placeholder="请确认密码" type="text">
      <br>
    </div>
    <!-- 第三个输入框 -->
    <div class="Yzm">
      <input class="code" v-model="codeNumber" placeholder="验证码" type="text">
      <img class="img_p" :src="code&&code" alt>
      <div class="changYzm">
        <p>看不清</p>
        <button class="img_b" @click="getcode()">换一张</button>
      </div>
    </div>
    <br>
    <button class="loginBtn" @click="login()">确认修改</button>
  </div>
</template>
<script>
export default {
  neme: "czmm",
  data() {
    return {
      code: "", //存储验证码,64位图片
      username: "",
      oldpassWord: "",
      newpassword: "",
      confirmpassword: "",
      codeNumber: "" //输入框的值-验证码
    };
  },
  created() {
    //获取验证码
    this.getcode();
  },
  methods: {
    getcode() {
      const api = "https://elm.cangdu.org/v1/captchas";
      this.$http({
        url: api,
        method: "post",
        //用于表示用户代理是否应该在跨域请求情况下从其他域发送cookies--不使用缓存数据
        withCredentials: true
      }).then(res => {
        console.log("验证码");
        console.log(res);
        this.code = res.data.code;
      });
    },
    login() {
      const api = "https://elm.cangdu.org/v2/changepassword";
      this.$http({
        url: api,
        method: "post",
        withCredentials: true,
        data: {
          username: this.username,
          oldpassWord: this.oldpassWord,
          newpassword: this.newpassword,
          confirmpassword: this.confirmpassword,
          captcha_code: this.codeNumber
        }
      }).then(res => {
        console.log(res);
        console.log(res.data);
        alert(res.data.success);
      });
    },
    go(router) {
      this.$router.back();
    }
  }
};
</script>
<style scoped>
#head {
  height: 0.4rem;
  line-height: 0.4rem;

  border: 1px solid black;
  background-color: rgb(0, 102, 255);
  position: relative;
}
.img {
  height: 0.4rem;
  line-height: 0.4rem;
  color: white;
}
.loginPW {
  /* border: 1px solid black; */
  height: 0.1.5rem;
  line-height: 0.1.5rem;
  font-size: 0.2rem;
  font-weight: bold;
  color: white;
  position: absolute;
  right: 40%;
  transform: transform(-40%);
}
.user,
.oldpassWord,
.newpassword,
.confirmpassword,
.loginBtn {
  width: 100%;
  height: 0.6rem;
  font-size: 0.2rem;
  line-height: 0.4rem;
  border-bottom: 0.01rem solid gainsboro;
}
/* 登录按钮背景色 */
.loginBtn {
  background-color: green;
}
.code {
  width: 2rem;
  height: 0.6rem;
  font-size: 0.2rem;
  line-height: 0.4rem;
  border-bottom: 0.01rem solid gainsboro;
}
.Yzm {
  display: flex;
  flex-wrap: nowrap;
  background-color: #fff;
}
/* 换一张：按钮 */
.img_b {
  border: 1px solid black;
  margin-left: 0.3rem;
  background-color: #fff;
  color: blue;
}
/* 看不清，换一张的div */
.changYzm {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
}
/* 红字提示div */
.err {
  width: 100%;
  height: 0.6rem;
  font-size: 0.15rem;
  line-height: 0.4rem;
  color: red;
}
/* 重置密码按钮 */
.NewSZ {
  float: right;
  color: blue;
}
</style>
