<template>
  <div id="app">
    <div id="nav">
      <Navbar />
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@font-face {
  font-family: CoinbaseDisplay;
  src: url("./assets/fonts/CoinbaseDisplay-Medium.woff2") format("woff2");
  font-weight: 500;
  font-style: normal;
}
@font-face {
  font-family: CoinbaseDisplay;
  src: url("./assets/fonts/CoinbaseDisplay-Regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: CoinbaseSans;
  src: url("./assets/fonts/CoinbaseSans-Medium.woff2") format("woff2");
  font-weight: 500;
  font-style: normal;
}
@font-face {
  font-family: CoinbaseSans;
  src: url("./assets/fonts/CoinbaseSans-Regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: CoinbaseText;
  src: url("./assets/fonts/CoinbaseText-Medium.woff2") format("woff2");
  font-weight: 500;
  font-style: normal;
}
@font-face {
  font-family: CoinbaseText;
  src: url("./assets/fonts/CoinbaseText-Regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
}

#app {
  font-family: CoinbaseSans, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  /* padding: 20px; */
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
