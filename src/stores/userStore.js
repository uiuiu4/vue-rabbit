//管理用户数据相关
import { loginAPI } from "@/api/user";
import { defineStore } from "pinia";
import {ref} from 'vue'

export const useUserStore = defineStore('user',()=>{
  //定义管理用户数据的state
  const userInfo = ref({})

  //定义获取接口的action函数
  const getUserInfo = async({account,password})=>{
    const res = await loginAPI({account,password})
    userInfo.value = res.result
  }
  //退出时清除用户数据
  const clearUserInfo = () =>{
    userInfo.value = {}
  }
  //以对象格式把state和action return
  return{
    userInfo,
    getUserInfo,
    clearUserInfo
  }
},{
  persist: true,
})