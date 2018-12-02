import { PodcastSearch } from "./podcast-search.component";
import { connect } from "react-redux";
import {
  setSearchPhrase,
  clearSearchPhrase,
  fetchPodcasts
} from "../services/podcast/podcast.actions";

const mapStateToProps = state => ({
  searchPhrase: state.podcasts.searchPhrase,
  searchResult: state.podcasts.searchResult
});

const mapDispatchToProps = {
  setSearchPhrase,
  clearSearchPhrase,
  fetchPodcasts
};

// Can be done is this way also
// const mapDispatchToProps = dispatch => ({
//   setSearchPhrase: searchPhrase => dispatch(setSearchPhrase(searchPhrase)),
//   clearSearchPhrase: () => dispatch(clearSearchPhrase());
// });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PodcastSearch);
