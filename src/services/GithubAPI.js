import axios from "axios";

export default {
  // Github API
  getGithubProfile(username) {
    return axios
      .get("https://api.github.com/users/" + username)
      .then(response => {
        return response.data;
      });
  }
};
