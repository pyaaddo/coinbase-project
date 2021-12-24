<template>
  <div class="navbar">
    <div class="logo">
      <router-link to="/">
        <img src="../assets/Coinbase.svg" alt="" />
      </router-link>
    </div>

    <div class="nav-list">
      <ul>
        <router-link to="/prices">
          <li>Prices</li>
        </router-link>
        <li @mouseenter="showMenu" @mouseleave="rollBack">Learn</li>
        <li @mouseenter="open" @mouseleave="close">Individuals</li>
        <li @mouseenter="openMenu" @mouseleave="closeMenu">Businesses</li>
        <li @mouseenter="menuOpen" @mouseleave="menuClose">Developers</li>
        <li @mouseenter="openTheMenu" @mouseleave="closeTheMenu">Company</li>
      </ul>
    </div>


    <div class="nav-btns">
      <button class="clearbtn">Sign In</button>
      <button class="bluebtn">Get Started</button>
    </div>

    <Learnmenu v-if="dropmenu" />
    <Individuals v-if="menu" />
    <Businesses v-if="menu1" />
    <Developers v-if="menu2" />
    <Company v-if="menu3" />
  </div>



</template>

<script>
import Learnmenu from "../components/NavMenu/Learn.vue";
import Individuals from "../components/NavMenu/Individuals.vue";
import Businesses from "../components/NavMenu/Businesses.vue";
import Developers from "../components/NavMenu/Developers.vue";
import Company from "../components/NavMenu/Company.vue";

export default {
  name: "NavBar",
  components: {
    Learnmenu,
    Individuals,
    Businesses,
    Developers,
    Company,
  },

  data(){
    return{
      dropmenu: false,
      menu: false, 
      menu1: false,
      menu2: false,
      menu3: false,
    }
  }, 
  
  methods:{
    showMenu(){
      this.dropmenu=true
      
    }, 
    rollBack(){
      this.dropmenu=false
    },
     open(){
      this.menu = true
      console.log('hovered')
      
    }, 
    close(){
      this.menu = false
    },
    openMenu(){
      this.menu1 = true
    },
    closeMenu(){
      this.menu1 = false
    },
     menuOpen(){
      this.menu2 = true
    },
    menuClose(){
      this.menu2 = false
    },
    
     openTheMenu(){
      this.menu3 = true
    },
    closeTheMenu(){
      this.menu3 = false
    }
  }
 
};
</script>

<style scoped>
.navbar {
  padding: 20px;
  padding-left: 100px;
  padding-right: 100px;
  /* height: 50px; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid rgb(223, 223, 223);
  background-color: white;
  position: fixed;
  width: 100%;
}

.nav-list {
    display: flex;
  gap: 20px;
  cursor: pointer;
}


.nav-list div:hover{
  /* border-bottom: 4px solid rgb(0, 82, 255); */
}

.logo {
  width: 112px;
  height: 20px;
}

ul {
  list-style-type: none;
  display: flex;
  gap: 20px;
  text-decoration: none;
}

.clearbtn {
  border: none;
  background-color: white;
  padding: 10px 12px;
  cursor: pointer;
  font-size: 14px;
}
.bluebtn {
  border-radius: 4px;
  border: 1px solid rgb(0, 82, 255);
  background-color: rgb(0, 82, 255);
  color: rgb(255, 255, 255);
  padding: 10px 12px;
  cursor: pointer;
  font-size: 14px;
}
</style>
