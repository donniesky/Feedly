export var REMOTE = {
    param_token: 'A9i3rjVZrpLP5vry7gRWFWhpUUgOlZ1Ym7VKECbXwK8k_LexzwlC_GhHppq-dLKKGkJ_zjX1_KIpAZWvttNThfOdwIW1aPB11HS2N9nLxAwmvAQ1kzCkcMJf-5vaBTGQ_uKkaSMAnMsqVPa5fGnvqLmQnNFkKRu4Cdb2gc22QfDnPBDdOM4bHKlev1jNJhd6YMqD02IRQqM9mKPweH4CEhwUi43u9yFuF6r73p3jukEzqw:feedly'
};
export default class RemoteDataSource {

    fetchFeedContents(feedIds, pageSize) {
        let isOk;
        return new Promise((resolve, reject) => {
            fetch('https://feedly.com/v3/streams/contents?streamId='
                + feedIds + '&count=' + pageSize + '&ranked=newest', {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                }
            }).then(response => {
                isOk = response.ok;
                return response.json();
            }).then(result => {
                if (isOk) {
                    resolve(result);
                } else {
                    reject(result);
                }
            }).catch(error => {
                reject(error);
            });
        })
    }

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

    fetchRecommendations(topic) {
        let isOk;
        return new Promise((resolve, reject) => {
            fetch('https://feedly.com/v3/recommendations/topics/' + topic +
                '?context=discover&locale=zh', {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                }
            }).then((response) => {
                isOk = response.ok;
                return response.json();
            }).then((result) => {
                if (isOk) {
                    resolve(result.relatedTopics);
                } else {
                    reject(result);
                }
            }).catch((error) => {
                reject(error);
            });
        })
    }

    search(word, pageSize) {
        let isOk;
        return new Promise((resolve, reject) => {
            fetch('https://feedly.com/v3/search/feeds?q=' + word + '&n=' + pageSize +
                '&fullTerm=false&organic=true&promoted=true&locale=zh')
                .then((response) => {
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
        })
    }

}