<template>
  <div>
    <div id="head">
      <img @click="go()" class="img" src="../../static/imgs/left.png" alt>
      <span class="loginPW">密码登录</span>
    </div>
    <br>
    <div>
      <input class="user" v-model="username" placeholder="账号" type="text">
      <br>
      <input class="pasw" v-model="password" placeholder="密码" type="text">
      <br>

      <!-- 第三个输入框 -->
      <div class="Yzm">
        <input class="code" v-model="codeNumber" placeholder="验证码" type="text">
        <img class="img_p" :src="code&&code" alt>
        <div class="changYzm">
          <p>看不清</p>
          <button class="img_b" @click="getcode()">换一张</button>
        </div>
      </div>
      <!-- 红字提示框div -->
      <div class="err">
        <p>温馨提示：未注册过的账号，登录时将自动注册</p>
        <p>注册过的用户凭账号密码登录</p>
      </div>
      <br>
      <button class="loginBtn" @click="login()">登录</button>
      <br>
      <br>
      <br>
      <p @click="add()" class="NewSZ">重置密码?</p>
    </div>
  </div>
</template>
<script>
export default {
  neme: "login.2",
  data() {
    return {
      code: "", //存储验证码,64位图片
      username: "",
      password: "",
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
        this.code = res.data.code;
      });
    },
    login() {
      const api = "https://elm.cangdu.org/v2/login";
      this.$http({
        url: api,
        method: "post",
        withCredentials: true,
        data: {
          username: this.username,
          password: this.password,
          captcha_code: this.codeNumber
        }
      }).then(res => {
        if (res.data.message) {
          alert(res.data.message);
        } else {
          this.abc();
          this.$router.back();
        }
      });
    },
    go() {
      this.$router.back();
    },
    // 重置密码按钮
    add() {
      this.$router.push({
        name: "czmm"
      });
    },
    abc(){
      this.$store.commit("dengluadd");
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
.pasw,
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
