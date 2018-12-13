import {
  FETCH_PODCAST_SUCCESS,
  SET_SEARCH_PHRASE,
  CLEAR_SEARCH_PHRASE
} from "./podcast.const";

const initialState = {
  searchPhrase: "",
  searchResult: []
};

export const podcastReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_PHRASE:
      return {
        ...state,
        searchPhrase: action.searchPhrase
      };
    case FETCH_PODCAST_SUCCESS:
      return {
        ...state,
        searchResult: action.response.data.results
      };
    case CLEAR_SEARCH_PHRASE:
      return {
        ...state,
        searchPhrase: ""
      };
    default:
      return state;
  }
};
