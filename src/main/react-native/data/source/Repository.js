import LocalDataSource from "./local/LocalDataSource";
import RemoteDataSource from "./remote/RemoteDataSource";

export default class Repository {

    constructor() {
        this.local = new LocalDataSource();
        this.remote = new RemoteDataSource();
    }

    fetchSuggestion() {
        return this.remote.fetchSuggestion();
    }

    fetchRecommendations(topic) {
        return this.remote.fetchRecommendations(topic);
    }

    search(word, pageSize) {
        return this.remote.search(word, pageSize);
    }

    fetchFeedContents(feedIds, pageSize) {

        return this.remote.fetchFeedContents(feedIds, pageSize);
    }

}