import { getAction, getBTC, putAction, postAction, httpAction } from '@/api/manage'

//获取二维码
const getCode =  (params)=>postAction("/client/api/wallet/getQRCode",params);
// 获取汇率
const getbtc =  ()=>getBTC('/api?module=stats&action=bnbprice');
// 中转HTTP请求
export const transitRESTful = {
  get: (url, parameter) => getAction(getTransitURL(url), parameter),
  post: (url, parameter) => postAction(getTransitURL(url), parameter),
  put: (url, parameter) => putAction(getTransitURL(url), parameter),
  http: (url, parameter) => httpAction(getTransitURL(url), parameter),
}

export {
  getCode,
  getbtc
}



