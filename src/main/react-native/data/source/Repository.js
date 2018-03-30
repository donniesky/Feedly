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

}