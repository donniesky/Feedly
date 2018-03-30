const request = (url, method, body) => {
  let isOk;
  return new Promise(((resolve, reject) => {
      fetch(url, {
          method,
          headers: {
              'Content-Type': 'application/json;charset=utf-8'
          },
          body
      }).then((response) => {
          isOk = response.ok;
          return response.json();
      }).then((result) => {
          if (isOk) {
              resolve(result);
          } else {
              reject(result);
          }
      }).catch((e) => {
          reject(e);
      });
  }));
};

export default class NetUtil {
    static get(url, body) {
        return request(url, 'get', body);
    }

    static post(url, body) {
        return request(url, 'post', body);
    }
}

