import { observable } from "mobx";
import { fetchPodcasts } from "./podcast.actions";

class PodcastStore {
  @observable searchPhrase = "";
  @observable searchResult: [];

  async fetchPodcasts(searchPhrase) {
    const response = await fetchPodcasts(searchPhrase);
    this.searchResult = response.data.results;
  }
}

export const podcastStore = new PodcastStore();
