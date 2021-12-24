<template>
  <div class="container">

      <div class="amount">
          <h2> $327B</h2>
          <p>Quarterly volume traded</p>
      </div>

    <div class="countries">
        <h2>100+</h2>
        <p>Countries supported</p>
    </div>

    <div class="users">
        <h2>73+M</h2>
        <p>Verified users</p>
    </div>

  </div>
</template>

<script>



export default {
  name: "Stats",
  data () {
   return {
       value: [],
   }
}
}
</script>

<style scoped>

.container {
    background: blue;
    height: 216px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-content: space-evenly;
}

h2 {
    font-size: 56px;
    font-weight: 500;
    color: white;
}

p {
    font-size: 16px;
    color: rgb(192, 192, 192);
}

</style>
