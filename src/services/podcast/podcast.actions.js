import axios from "axios";
import {
  FETCH_PODCAST_SUCCESS,
  SET_SEARCH_PHRASE,
  CLEAR_SEARCH_PHRASE
} from "./podcast.const";
import { RequestStatus } from "../request.reducer";

export const setSearchPhrase = searchPhrase => dispatch =>
  dispatch({
    type: SET_SEARCH_PHRASE,
    searchPhrase
  });

export const clearSearchPhrase = searchPhrase => dispatch =>
  dispatch({
    type: CLEAR_SEARCH_PHRASE
  });

export const getRequestAction = (type, requestName, payload) => dispatch => {
  dispatch({
    type,
    requestName,
    payload
  });
};

export const fetchPodcastSuccess = response => dispatch =>
  dispatch({
    type: FETCH_PODCAST_SUCCESS,
    response
  });

export const fetchPodcasts = searchPhrase => (dispatch, getState, api) => {
  const requestName = "fetchPodcasts";

  dispatch(getRequestAction(RequestStatus.RUNNING, requestName, undefined));
  axios({
    method: "get",
    url: `${api}/search?term=${searchPhrase}&limit=25`
  })
    .then(response => {
      dispatch(
        getRequestAction(RequestStatus.SUCCESSFUL, requestName, response.data)
      );
      dispatch(fetchPodcastSuccess(response));
    })
    .catch(error =>
      dispatch(getRequestAction(RequestStatus.FAILURE, requestName, error.data))
    );
};
