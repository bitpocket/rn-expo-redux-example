import axios from "axios";

export const fetchPodcasts = searchPhrase =>
  axios({
    method: "get",
    url: `https://itunes.apple.com/search?term=${searchPhrase}&limit=25`
  });
