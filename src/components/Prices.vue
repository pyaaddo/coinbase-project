<template>
  <div class="pricespage">
    <NavBar />

    <div class="main-container">
      <div class="upper">
        <div class="left">
          <p class="first-para">In the past 24hrs</p>
          <p class="market">
            Market has been up <span style="color: green">5.47%</span>
          </p>
        </div>

        <div class="right"><input type="search" placeholder="Search" /></div>
      </div>

      <!-- <div class="mid">
        <ul class="list1">
          <li v-for="ticker in allTickers.slice(0, 1)" :key="ticker.id">
            <div>
              <h2>Top Gainer (24hr)</h2>
              <img :src="ticker.image" alt="" />
              <p>PlayDapp</p>
              <p>+23.27% price change</p>
            </div>
          </li>

          <li><h2>New listings</h2></li>
          <li>
            <h2>Coinbase bytes</h2>
            <p class="news">Crypto news, Every week</p>
          </li>
        </ul>
        <ul class="list2">
          <li><h2>Highest volume (24hr)</h2></li>
          <li><h2>Most visited (24hr)</h2></li>
          <li><h2>Earn free crypto</h2></li>
        </ul>
      </div> -->

      <div class="mid">
        <ul class="list1">
          <li v-for="ticker in allTickers.slice(0, 1)" :key="ticker.id">
            <h2>Top Gainer (24hr)</h2>
            <div class="priceholder">
              <div class="image"><img :src="ticker.image" alt="" /></div>
              <div class="name-price">
                <p>{{ ticker.name }}</p>
                <p class="percent_change">
                  {{ ticker.price_change_percentage_24h.toFixed(2) }}%
                </p>
              </div>
            </div>
          </li>
          <li v-for="ticker in allTickers.slice(5, 6)" :key="ticker.id">
            <h2>New listings</h2>
            <div class="priceholder">
              <div class="image"><img :src="ticker.image" alt="" /></div>
              <div class="name-price">
                <p>{{ ticker.name }}</p>
                <p class="percent_change">
                  {{ ticker.price_change_percentage_24h.toFixed(2) }}%
                </p>
              </div>
            </div>
          </li>
          <li v-for="ticker in allTickers.slice(7, 8)" :key="ticker.id">
            <h2>Coinbase bytes</h2>
            <div class="priceholder">
              <div class="image"><img :src="ticker.image" alt="" /></div>
              <div class="name-price">
                <p>{{ ticker.name }}</p>
                <p class="percent_change">
                  {{ ticker.price_change_percentage_24h.toFixed(2) }}%
                </p>
              </div>
              </div>
          </li>
        </ul>
        <ul class="list2">
          <li v-for="ticker in allTickers.slice(1, 2)" :key="ticker.id">
            <h2>Highest volume (24h)</h2>
            <div class="priceholder">
              <div class="image"><img :src="ticker.image" alt="" /></div>
              <div class="name-price">
                <p>{{ ticker.name }}</p>
                <p class="percent_change">
                  {{ ticker.price_change_percentage_24h.toFixed(2) }}%
                </p>
              </div>
            </div>
          </li>
          <li v-for="ticker in allTickers.slice(2, 3)" :key="ticker.id">
            <h2>Most visited (24h)</h2>
            <div class="priceholder">
              <div class="image"><img :src="ticker.image" alt="" /></div>
              <div class="name-price">
                <p>{{ ticker.name }}</p>
                <p class="percent_change">
                  {{ ticker.price_change_percentage_24h.toFixed(2) }}%
                </p>
              </div>
            </div>
          </li>
          <li v-for="ticker in allTickers.slice(1, 2)" :key="ticker.id">
            <h2>Earn free crypto</h2>
            <div class="priceholder">
              <div class="image"><img :src="ticker.image" alt="" /></div>
              <div class="name-price">
                <p>{{ ticker.name }}</p>
                <p class="percent_change">
                  {{ ticker.price_change_percentage_24h.toFixed(2) }}%
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <table>
        <tr class="head">
          <td>Name</td>
          <td>Price</td>
          <td>Change</td>
          <td>Price chart</td>
          <td>Volume(24h)</td>
          <td>Market cap</td>
          <td>Supply</td>
          <td>Trade</td>
        </tr>

        <tr
          class="data"
          v-for="ticker in allTickers.slice(0, 20)"
          :key="ticker.id"
        >
          <td>
            <div>
              <span><img :src="ticker.image" alt="" /></span> {{ ticker.name }}
            </div>
          </td>
          <td>
            <span>{{ "GHS " + (ticker.current_price / 6.17).toFixed(2) }}</span>
          </td>
          <td :class="`${percentColor(ticker.price_change_percentage_24h)}`">
            {{ ticker.price_change_percentage_24h.toFixed(2) }}%
          </td>
          <td>
            <svg
              class="sparkline"
              width="100"
              height="30"
              stroke-width="1"
              :class="{ sparkred: ticker.price_change_percentage_24h < 0 }"
            ></svg>
          </td>
          <td>
            {{
              "GHS " +
              (ticker.total_volume / (1000000000 * 6.17)).toFixed(2) +
              "B"
            }}
          </td>
          <td>
            {{
              "GHS " +
              (ticker.market_cap / (1000000000 * 6.17)).toFixed(2) +
              "B"
            }}
          </td>
          <td>{{ (ticker.total_supply / 1000000).toFixed(2) + "M" }}</td>
          <td><button>Trade</button></td>
        </tr>
      </table>
    </div>

    <Earn />

    <Footer />
  </div>
</template>

<script>
import NavBar from "../components/Nav.vue";
import Earn from "../components/Earn.vue";
import Footer from "../components/Footer.vue";
import { mapGetters, mapActions } from "vuex";
import sparkline from "@fnando/sparkline";

export default {
  name: "Prices",

  beforeUpdate() {
    this.$nextTick(function () {
      function randNumbers() {
        let numbers = [];

        for (let i = 0; i < 20; i += 1) {
          numbers.push(Math.random() * 50);
        }
        return numbers;
      }
      document.querySelectorAll(".sparkline").forEach((svg) => {
        sparkline(svg, randNumbers());
      });
    });
  },

  components: {
    NavBar,
    Earn,
    Footer,
  },

  methods: {
    ...mapActions(["fetchTickers"]),

    percentColor(percent) {
      return percent > 0 ? "green" : "red";
    },
  },
  computed: mapGetters(["allTickers"]),

  created() {
    this.fetchTickers();
  },
};
</script>

<style scoped>
/* h2 {
    padding: 300px;
} */

.main-container {
  padding: 0 10%;
  padding-top: 100px;
  /* margin-top: 64px; */
}
.first-para {
  font-weight: 500;
  color: rgb(91, 97, 110);
  font-size: 14px;
}
.market {
  font-size: 24px;
  font-weight: 500;
  color: rgb(10, 11, 13);
}
.upper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.left {
  text-align: left;
}
.right {
  width: 50%;
  height: 48px;
  padding: 8px;
  border: 1px solid rgba(91, 97, 110, 0.2);
}
input[type="search"] {
  width: 100%;
  height: 100%;
  border: none;
  padding: 10px;
}
input[type="search"]::placeholder {
  font-weight: 500;
  font-size: 16px;
}
ul {
  display: flex;
  list-style-type: none;
}

li {
  border: 1px solid rgba(91, 97, 110, 0.2);
  width: calc(100% / 3);
  height: 150px;
  padding: 16px;
  border-radius: 20px;
}

.mid {
  display: flex;
  gap: 10px;
  text-align: left;
}

.mid p {
  padding-top: 8px;
}

.mid img {
  margin-top: 8px;
}
.mid .list1,
.list2 {
  width: 50%;
  margin-top: 32px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  border-radius: 20px;
}

.mid li:hover {
  background: rgb(228, 228, 228);
}

.mid li h2 {
  font-size: 14px;
  font-weight: 500;
}

.mid ul {
  /* border-radius: 20px;
  background: red; */
}

/* .list1 li:last-child {
  background: rgb(226, 226, 226);
  color: white;
} */
/* .list1 li:first-child {
  border-top-left-radius: 4px;
}
.list2 li:first-child {
  border-bottom-left-radius: 4px;
}
.list1 li:last-child {
  border-top-right-radius: 4px;
}
.list2 li:last-child {
  border-bottom-right-radius: 4px;
} */


.mid li .image img {
  width: 24px;
  height: 24px;
}

.news {
  font-size: 16px;
  font-weight: 500;
  max-width: 170px;
  line-height: 1.6;
}
table {
  width: 100%;
  margin-top: 32px;
  border: 1px solid rgb(175, 175, 175);
  border-radius: 20px;
  margin-top: 50px;
  margin-bottom: 100px;
}

tr {
  /* border: 1px solid black; */
}
td {
  /* border: 1px solid black; */
  /* display: flex;
    align-items: center; */
  padding: 16px;
}

.green {
  color: rgb(9 133 81);
}
.red {
  color: rgb(207 32 47);
}

.sparkline {
  stroke: #098551;
  fill: none;
}

 .sparkred {
    stroke: red;
    fill: none;
  }

span img {
  width: 24px;
  height: 24px;
}
.data td {
  gap: 16px;
}
td div {
  display: flex;
  align-items: center;
  gap: 16px;
}
button {
  color: white;
  background: rgb(0, 52, 255);
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
}
</style>
