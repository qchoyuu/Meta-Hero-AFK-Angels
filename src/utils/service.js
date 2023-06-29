import axios from 'axios'; //引入axios文件
const service = axios.create(); // 创建axios 赋值给常量service
service.interceptors.response.use(
  function (response) {
    // 响应拦截器
    // 对响应数据做点什么
    // console.log(123312)
    return response;
  },
  function (error) {
    //此处对应上方的post发送请求登陆
    // 对响应错误做点什么——---status：(404/500等)状态码出现的位置
    switch (error.response.status) {
      case 500:
        //处理的操作
        // 服务器错误对应的提示……
        break;
      case 404:
        //处理的操作，例如将用户返回首页
        // 跳404页面等等……
        console.log(' not found api')
        break;
    }
    return Promise.reject(error);
  },
);
export default service;