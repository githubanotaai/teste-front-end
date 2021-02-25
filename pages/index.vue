<template>
  <v-container fluid grid-list-xl>
    <v-layout wrap justify-space-around>
      <v-flex v-for="item in products" :key="item.category_title">
        <div class="text-center">
          <v-btn
            rounded
            color="pink"
            dark
            @click="selectProduct(item.category_title)"
          >
            {{ item.category_title }}
          </v-btn>
        </div>
      </v-flex>
    </v-layout>
    <v-layout wrap justify-space-around>
      <v-flex v-for="prd in selectedProduct.products" :key="prd.id">
        <v-card color="gray" width="400px">
          <v-card-title>
            <p class="title text--primary text-center text-wrap">
              {{ prd.title }}
            </p>
          </v-card-title>
          <v-img height="250" :src="prd.picture"></v-img>
          <v-card-text>{{ prd.description }}</v-card-text>
          <v-card-actions>
            <div class="my-4 subtitle-1">{{ prd.price | formatReal }}</div>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import serverAxios from "@/api/axios/serverAxios.js";
import { mapState } from "vuex";
export default {
  filters: {
    formatReal(num) {
      return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(num);
    },
  },
  data: () => ({
    products: [],
    selectedProduct: [],
    windowSize: {
      x: 0,
      y: 0,
    },
  }),
  async mounted() {
    this.products = await this.getUserData();
    this.$store.state.category.CATEGORY_LIST = this.products;
    console.log(this.products);
  },
  // computed: {
  //   products: {
  //     get() {
  //       return this.products;
  //     },
  //   },
  // },
  methods: {
    async getUserData() {
      return (await serverAxios.get("/api/")).data;
    },
    selectProduct(ProductCategory) {
      console.log(ProductCategory);
      debugger;
      this.selectedProduct = this.products.find(
        (elem) => elem.category_title === ProductCategory
      );
      console.log(this.selectedProduct.products);
    },
  },
};
</script>
<style scoped>
.v-card__text,
.v-card__title {
  word-break: normal; /* maybe !important  */
}
</style>
