const BASE_URL = 'https://api-hmugo-web.itheima.net/api';
export const myReq = (options)=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url:BASE_URL + options.url,
			meethod:options.method || 'GET',
			data:options.data || {},
			success:res=>{
				if(res.data.meta.status !== 200){
					return uni.showToast({
						title:'失败'
					})
				}
				resolve(res)
			},
			fail:(error)=>{
				return uni.showToast({
					title:'失败'
				})
				reject(error)
			}
		})
	})
}
/* myReq({
	url:'/public/v1/home/swiperdata',
	method:'GET'
}) */