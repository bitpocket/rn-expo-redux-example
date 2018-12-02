import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { podcastReducer } from "./services/podcast/podcast.reducer";

const rootReducer = combineReducers({
  podcasts: podcastReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
