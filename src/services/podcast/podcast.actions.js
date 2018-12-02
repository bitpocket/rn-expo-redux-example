import axios from "axios";
import {
  FETCH_PODCAST_SUCCESS,
  FETCH_PODCAST_FAILURE,
  SET_SEARCH_PHRASE,
  CLEAR_SEARCH_PHRASE
} from "./podcast.const";

export const setSearchPhrase = searchPhrase => dispatch =>
  dispatch({
    type: SET_SEARCH_PHRASE,
    searchPhrase
  });

export const fetchPodcastSuccess = response => dispatch =>
  dispatch({
    type: FETCH_PODCAST_SUCCESS,
    response
  });

export const fetchPodcastFailed = reason => dispatch =>
  dispatch({
    type: FETCH_PODCAST_FAILURE,
    reason
  });

export const clearSearchPhrase = () => dispatch =>
  dispatch({
    type: CLEAR_SEARCH_PHRASE
  });

export const fetchPodcasts = searchPhrase => (dispatch, getState, api) => {
  axios({
    method: "get",
    url: `${api}/search?term=${searchPhrase}&limit=25`
  })
    .then(response => dispatch(fetchPodcastSuccess(response)))
    .catch(reason => dispatch(fetchPodcastFailed(reason)));
};
