<template>
  <div class="hero">
    <div class="herotext">
      <div class="herotextSection2">
        <span>Earn up to $10 worth of crypto</span>
      </div>

      <div class="herotextSection3">
        <p>
          Discover how specific cryptocurrencies work — and get a bit of each
          crypto to try out for yourself.
        </p>
      </div>

      <div class="earnbtn">
        <button>Start earning</button>
      </div>
    </div>

    <div class="hero-image">
      <img src="../assets/earnedimg.ong.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Earn",
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 411px;
  background: rgb(245,248,254);
  margin-bottom: 100px;
}

.herotext {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-right: 50px;
  padding-left: 50px;
}

.herotextSection1 {
  display: flex;
  align-items: center;
  gap: 5px;
}

.herotextSection2 {
  display: flex;
}

.herotextSection2 span {
  text-align: left;
  font-size: 62px;
  font-weight: 500;
}

.herotextSection3 {
  display: flex;
}

.herotextSection3 h3, p {
  text-align: left;
}

.earnbtn {
  display: flex;
  align-items: center;
}

.earnbtn button {
  width: 188.23px;
  padding: 20px;
  border-radius: 3px;
  background: none;
  font-size: 18px;
  font-weight: 400;
  color: white;
  background: rgb(0, 82, 255);
  border: 1px solid rgb(214, 214, 214);
}

.hero-image {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 0px;
}

.hero-image img {
  width: 700px;
  height: 411.38px;
}
</style>
