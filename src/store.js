import { createStore, combineReducers } from 'redux';
import { podcastReducer } from './services/podcast/podcast.reducer';

const rootReducer = combineReducers({
  podcasts: podcastReducer
});

export const store = createStore(rootReducer);
