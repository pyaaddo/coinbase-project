<template>
  <div class="home">
    <NavBar />
    <!-- <h2>This is the Home Page</h2> --> 
    <Hero />

    <CreatePortfolio />

    <Trusted />

    <Stats />

    <GetStarted />

    <Earn />

    <Footer />

    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import NavBar from '../components/Nav.vue'
import Hero from '../components/HeroSection.vue'
import CreatePortfolio from '../components/CreatePortfolio.vue'
import Trusted from '../components/Trusted.vue'
import Stats from '../components/Stats.vue'
import GetStarted from '../components/GetStarted.vue'
import Earn from '../components/Earn.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    NavBar,
    Hero,
    CreatePortfolio,
    Trusted,
    Stats,
    GetStarted,
    Earn,
    Footer,
  }
}
</script>
