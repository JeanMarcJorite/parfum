<script>
import { onMounted } from 'vue'
import Perfume from '../components/Perfume.vue'

export default {
  name: 'Product',
  components: {
    Perfume
  },
  data() {
    return {
      message: 'Nos produits',
      parfum: null,
      active: false
    }
  },
  methods: {
    async fetchParfumbyId(id) {
      const response = await fetch("/parfum.json");
      const data = await response.json();
      const numId = Number(id);
      this.parfum = data.products.find(p => p.id === numId);
    }
  },
  async mounted() {
    const id = this.$route.params.id;
    await this.fetchParfumbyId(id);
    this.active = true
  }

}
</script>

<template>
  <main>
    <Perfume v-if="parfum" :name="parfum.name" :description="parfum.description" :price="parfum.price"
      :brand="parfum.brand" :limit="parfum.quantity_available" :gender="parfum.gender" />

  
  </main>

</template>
