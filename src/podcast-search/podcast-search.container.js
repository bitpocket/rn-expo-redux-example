import { PodcastSearch } from "./podcast-search.component";
import { connect } from "react-redux";
import { setSearchPhrase, clearSearchPhrase } from "../services/podcast/podcast.actions";

const mapStateToProps = state => ({
  searchPhrase: state.podcasts.searchPhrase,
  searchResult: state.podcasts.searchResult
});

const mapDispatchToProps = dispatch => ({
  setSearchPhrase: searchPhrase => {
    dispatch(setSearchPhrase(searchPhrase));
  },
  clearSearchPhrase: () => {
    dispatch(clearSearchPhrase());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PodcastSearch);
