<script>


export default {
  name: 'AllParfume',
  data() {
    return {
      message: 'Nos produits',
      parfums: [],
      brand: [],
      limit: 10

    }
  },
  methods: {
    async fetchParfums(limit) {
      const response = await fetch("/parfum.json")
      const data = await response.json();
      this.parfums = [];
      console.log(data);
      for (let i = 0; i < limit; i++) {
        console.log(data.products[i]);
        this.parfums.push(data.products[i]);
      }
      console.log(this.parfums)
      for (let i = 0; i < limit; i++) {
        if (!this.brand.includes(data.products[i].brand)) {
          this.brand.push(data.products[i].brand);
        }
      }
    },
    async fetchParfumsByBrand(brand) {
      await this.fetchParfums(this.limit);
      if (brand !== "") {
        this.parfums = this.parfums.filter(p => p.brand === brand);
      }
    }
  },
  async mounted() {
    await this.fetchParfums(this.limit)
  }
}
</script>

<template>
  
<select @change="fetchParfumsByBrand($event.target.value)">
  <option value="">Tous</option>
  <option v-for="b in brand" :value="b">{{ b }}</option>
</select>


  <select @click="fetchParfums(this.limit)" v-model="limit">
    <option value="10">10</option>
    <option value="20">20</option>
    <option value="30">30</option>
    <option value="40">40</option>
    <option value="50">50</option>
    <option value="60">60</option>
    <option value="70">70</option>
    <option value="80">80</option>
    <option value="90">90</option>
    <option value="100">100</option>
    <option value="110">110</option>
  </select>
  <h1 class="welcome-message">{{ message }}</h1>
  <section>
    <ul class="container">
      <li v-for="(product, i) in parfums" :key="i" class="product-item">
        <RouterLink :to="`/products/${product.id}`">
        <h3>{{ product.name }}</h3>
        <p class="brand">{{ product.brand }}</p>
        <p>{{ product.price }} €</p>
        </RouterLink>
        <button class="product-button">
          <font-awesome-icon icon="shopping-bag" />
          <span class="button-text"> Commander</span>
        </button>
      </li>

    </ul>
  </section>

</template>

<style>
.welcome-message {
  color: black;
  font-family: "CenturyGothic", "CenturyGothic-fallback", Arial, sans-serif;
  text-transform: uppercase;
  font-size: 20px;
  line-height: 28px;
}

.product-item {
  flex: 1 0 200px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  color: black;
  list-style: none;
  position: relative;
  transition: all 0.4s ease-in-out;
}

.product-button {
  background-color: #f9f9f9;
  border: solid 1px #989494;
  border-radius: 40px;
  color: black;
  padding: 7px 5px;
  transition: all 0.4s ease-in-out;
  position: absolute;
  bottom: 7px;
  right: 0;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: stretch;
}

.button-text {
  font-size: 16px;
}

.brand {
  color: #717171;
  font-family: "CenturyGothic", "CenturyGothic-fallback", Arial, sans-serif;
}
</style>
