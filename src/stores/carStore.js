import { Goods } from "@element-plus/icons-vue";
import { defineStore } from "pinia";
import { ref } from 'vue'

export const useCartStore = defineStore('car',()=>{
  // 1.定义state-carList
  const cartList = ref([])
  // 2.定义action-addCar
  const addCart = (goods) =>{
    console.log(goods)
    //添加购物车操作
    //已添加过-count+1
    //未添加过-直接push
    const item = cartList.value.find((item)=>goods.skuId === item.skuId)
    if(item){
      //找到了
      item.count++
    }else{
      cartList.value.push(goods)
    }
  }

  //删除购物车
  const delCart = (skuId)=>{
    //1.找到要删除项的下标值-splice
    //2.使用数组的过滤方法-filter
    const idx = cartList.value.findIndex((item)=>skuId === item.id)
    cartList.value.splice(idx,1)
  }
  return {
    cartList,
    addCart,
    delCart
  }
},{
  persist: true,
})