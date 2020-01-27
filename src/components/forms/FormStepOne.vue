<template>
  <div class="container">
    <form action class="row col-md-12">
      <div class="input-group">
        <button @click.prevent="goToStep">Activities</button>
      </div>
    </form>
    <div class="row">
      <div class="package-details col-md-4 text-left">
        <img src="https://placeimg.com/250/150/any" alt />
        <span>Dive resort - Bunaken</span>

        <h1>Two fish</h1>
        <hr />
        <div class="date-info">on {{dateinfo}}</div>
        <div class="guest-info">2 guests</div>
        <hr />
        <ul class="packages-list">
          <!-- <li v-for="todo in todos" v-if="!todo.isComplete">
  {{ todo }}
          </li>-->
          <li class="d-flex justify-content-between" v-for="item in packages" :key="item.id">
            <p class="package-title">{{item.title}}</p>
            <span class="quantity">x2</span>
            <span class="total">$ {{ item.amount * 2 }}</span>
          </li>
        </ul>
        <hr />
        <div class="total-info">
          <p class="total-text">Total(USD)</p>
          <div class="amount">$330</div>
        </div>
      </div>
      <div class="package-options col-md-8 text-left">
        <h1>What will you do?</h1>
        <div class="diver-info">2/2 Divers</div>
        <div class="package-item-container d-flex align-content-center">
          <div class="package-item" v-for="item in packages" :key="item.id">
            <div class="package-item-info">
              <h2>{{item.tite}}</h2>
              <h6>{{item.divers}}</h6>
              <p>{{item.equipement}}</p>
              <h5>${{item.amount}}/guest</h5>
              <p>includes transport</p>
              <button v-on:click="increment(item)">+</button>
              <input type="text" v-model="item.guest" />
              <button v-on:click="decrement(item)">-</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["dateinfo"],
  data() {
    return {
      step: 1,
      packages: [
        {
          id: 0,
          title: "Chill",
          divers: "2 divers",
          equipement: "Included equipment",
          amount: 100,
          addOn: "includes transport",
          guest: 2
        },
        {
          id: 1,
          title: "Explore",
          divers: "3 divers",
          equipement: "Included equipment",
          amount: 130,
          addOn: "includes transport and lunch",
          guest: 0
        }
      ]
    };
  },
  methods: {
    showPackageOne(item) {
      return item.guest.length > 0 ? true : false;
    },
    goToStep(event) {
      this.step++;
      this.$emit("goToStep", this.step);
    },
    increment(e) {
      var id = this.packages.find(el => el.id === e.id);
      if (id) {
        this.packages[id.id].guest++;
      }
    },
    decrement(e) {
      var id = this.packages.find(el => el.id === e.id);
      if (id && id.guest > 0) {
        this.packages[id.id].guest--;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.package-details {
  padding: 20px;
  border: 1px solid black;
  img {
    display: block;
    width: 100%;
  }
}

.package-item {
  min-width: 150px;
  margin-right: 20px;
  padding: 20px;
  border: 1px solid black;
  p {
    color: #999;
  }
}
</style>