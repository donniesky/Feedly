export var REMOTE = {
    param_token: 'A9i3rjVZrpLP5vry7gRWFWhpUUgOlZ1Ym7VKECbXwK8k_LexzwlC_GhHppq-dLKKGkJ_zjX1_KIpAZWvttNThfOdwIW1aPB11HS2N9nLxAwmvAQ1kzCkcMJf-5vaBTGQ_uKkaSMAnMsqVPa5fGnvqLmQnNFkKRu4Cdb2gc22QfDnPBDdOM4bHKlev1jNJhd6YMqD02IRQqM9mKPweH4CEhwUi43u9yFuF6r73p3jukEzqw:feedly'
};
export default class RemoteDataSource {

    fetchSuggestion() {
        let isOk;
        return new Promise((resolve, reject) => {
            fetch('https://s3.feedly.com/essentials/essentials_en-US.json', {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    'X-Feedly-Access-Token': REMOTE.param_token
                }
            }).then((response) => {
                isOk = response.ok;
                return response.json();
            }).then((result) => {
                if (isOk) {
                    resolve(result);
                } else {
                    reject(result);
                }
            }).catch((error) => {
                reject(error);
            });
        });
    }

}