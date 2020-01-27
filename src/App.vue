<template>
  <div id="app">
    <header>
      <div class="jumbotron">
        <h1 class="display-5">Navigation Bar</h1>
      </div>
    </header>
    <inquiry></inquiry>
    <footer>
      <div class="jumbotron">
        <h1 class="display-5">Footer</h1>
      </div>
    </footer>
  </div>
</template>

<script>
import Inquiry from "./components/Inquiry";

export default {
  name: "app",
  components: { Inquiry }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1,
h2 {
  font-weight: normal;
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
