import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { podcastReducer } from "./services/podcast/podcast.reducer";
import { requestReducer } from "./services/request.reducer";

const rootReducer = combineReducers({
  requests: requestReducer,
  podcasts: podcastReducer
});

const api = "https://itunes.apple.com";
export const store = createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument(api))
);
