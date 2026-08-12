//封装banner数据业务相关代码
import { ref , onMounted } from 'vue'
import { getBannerAPI } from '@/api/home'

//获取banner
export function useBanner(){
  const bannerList = ref([])
  const getBanner = async() => {
    const res = await getBannerAPI({
      distributionSite:'2'
    })
    bannerList.value = res.result
    console.log(res)
  }

  onMounted(()=>{
    getBanner()
  })

  return{
    bannerList
  }
}
