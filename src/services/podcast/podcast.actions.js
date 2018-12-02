import axios from "axios";
import { store } from "./../../store";
import {
  FETCH_PODCAST_SUCCESS,
  SET_SEARCH_PHRASE,
  CLEAR_SEARCH_PHRASE
} from "./podcast.const";

export const setSearchPhrase = searchPhrase => ({
  type: SET_SEARCH_PHRASE,
  searchPhrase
});

export const fetchPodcastSuccess = response => ({
  type: FETCH_PODCAST_SUCCESS,
  response
});

export const clearSearchPhrase = () => ({
  type: CLEAR_SEARCH_PHRASE
});

export const fetchPodcasts = searchPhrase => {
  axios({
    method: "get",
    url: `https://itunes.apple.com/search?term=${searchPhrase}&limit=25`
  }).then(response => {
    store.dispatch({
      type: FETCH_PODCAST_SUCCESS,
      response
    });
  });
};
