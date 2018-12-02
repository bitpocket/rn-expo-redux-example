import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { podcastReducer } from "./services/podcast/podcast.reducer";

const rootReducer = combineReducers({
  podcasts: podcastReducer
});

// export const store = createStore(rootReducer, applyMiddleware(thunk));

const api = 'https://itunes.apple.com';
export const store = createStore(rootReducer, applyMiddleware(thunk.withExtraArgument(api)));
