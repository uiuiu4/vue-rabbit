import request from '@/utils/http'
import { id } from 'element-plus/es/locales.mjs'

export function getCategoryAPI(id){
  return request({
    url: '/category',
    params: {
      id
    }
  })
}

export function getCategoryFilterAPI(id){
  return request({
    url:'/category/sub/filter',
    params:{
      id
    }
  })
}