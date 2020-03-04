<template>
  <div class="login">
    <div class="container">
      <img src="../assets/团团.jpg" class="avatar" alt />
      <el-form :model="loginForm" :rules="rules" ref="loginForm" class="demo-ruleForm">
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            placeholder="请输入用户名"
            prefix-icon="el-icon-user-solid"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            placeholder="请输入密码"
            type="password"
            prefix-icon="el-icon-finished"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="login-btn" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
// 引入接口方法
import { login } from '@/api/login_index.js'
export default {
  data () {
    return {
      loginForm: {
        username: '', // 账号
        password: '' // 密码
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    login () {
      // 实现二次验证
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          login(this.loginForm)
            .then(res => {
              console.log(res)
              if (res.data.meta.status === 200) {
                // 实现路由跳转
                this.$router.push({ name: 'home' })
                localStorage.setItem('itcast_token'.res.data.data.token)
              } else {
                this.$message({
                  message: 'res.data.meta.msg',
                  type: 'error'
                })
              }
            })
            .catch(err => {
              console.log(err)
              this.$message({
                message: 'res.data.meta.msg',
                type: 'error'
              })
            })
        } else {
          this.$message({
            message: '请填写必填信息',
            type: 'error'
          })
          return false
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: aquamarine;
  .container {
    position: absolute;
    left: 0;
    right: 0;
    width: 400px;
    padding: 0px 40px 15px 40px;
    margin: 200px auto;
    background: white;
    .avatar {
      position: relative;
      left: 50%;
      width: 120px;
      height: 120px;
      margin-left: -60px;
      margin-top: -60px;
      box-sizing: border-box;
      border-radius: 50%;
      border: 10px solid #fff;
      box-shadow: 0 1px 5px #ccc;
      overflow: hidden;
    }
    .login-btn {
      width: 100%;
    }
  }
}
</style>
