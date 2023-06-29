import service from './service';
export function askFun(url, type, param) {
  let params = {
    url: 'http://192.168.167.14:8080/' + url,
    method: type, //发送方式
  }
  params[type === 'POST' ?'data':'params'] = param;
  return new Promise((resolve, reject) => {
    service
      .request(params)
      .then(ok => {
        resolve(ok);
      })
      .catch(err => {
        reject(err);
      });
  });
}