<template>
  <div id="app">
    <section class="jumbotron text-center">
      <div class="container">
        <h1 class="jumbotron-heading">Vue with Github API</h1>
        <img alt="Vue logo" src="https://vuejs.org/images/logo.png" />
        <p class="lead text-muted">
          A quick demo leveraging Vue alongside Bootstrap, Axios and Github API
          to display a user's profile.
        </p>
      </div>
    </section>
    <GithubProfile :username="`marklreyes`"/>
  </div>
</template>

<script>
import GithubProfile from "./components/GithubProfile.vue";

export default {
  name: "App",
  components: {
    GithubProfile
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
