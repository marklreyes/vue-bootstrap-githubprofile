<template>
  <div class="col d-flex justify-content-center">
    <div class="card" style="width: 18rem;">
      <img :src="user.avatar_url" class="card-img-top" alt="" />
      <div class="card-body">
        <h5 class="card-title">{{ user.name }}</h5>
        <p class="card-text text-center">Joined in {{ user.created_at }}</p>
      </div>
      <div class="card-body">
        <p>{{ user.company }}</p>
        <a :href="user.html_url" target="_blank" class="card-link"
          >Github Profile</a
        >
        <a :href="'https://' + user.blog" target="_blank" class="card-link">My Website</a>
      </div>
    </div>
  </div>
</template>
<script>
import GithubAPI from "../services/GithubAPI";
export default {
  name: "GithubProfile",
  props: {
    username: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      user: {}
    };
  },
  created() {
    GithubAPI.getGithubProfile(this.username)
      .then(result => {
        this.user = result;
      })
      .catch(error => {
        return error;
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
