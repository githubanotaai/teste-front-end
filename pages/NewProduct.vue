<template>
  <v-container>
    <p class="title text--primary text-center text-wrap">CRIAÇÃO DE PRODUTO</p>
    <v-form
      class="pa-2"
      ref="gdcCreateForm"
      name="gdcCreateForm"
      v-model="valid"
    >
      <v-row>
        <v-col cols="12" sm="5">
          <v-select :items="['Foo', 'Bar', 'Fizz', 'Buzz']" label="Fizzbuzz">
            <template v-slot:item="{ item, attrs, on }">
              <v-list-item v-bind="attrs" v-on="on">
                <v-list-item-title
                  :id="attrs['aria-labelledby']"
                  v-text="item"
                ></v-list-item-title>
              </v-list-item>
            </template>
          </v-select>
        </v-col>
        <v-col cols="12" sm="5">
          <div style="padding-top: 8px">
            <v-btn>Adicionar nova categoria</v-btn>
          </div>
        </v-col>
      </v-row>
      <v-text-field dense v-model="title" filled label="Título" />
      <v-textarea
        dense
        v-model="description"
        label="Descrição"
        auto-grow
        filled
        rows="1"
        row-height="15"
      />
      <v-row>
        <v-col cols="12" sm="5">
          <v-text-field
            dense
            v-model.number="price"
            type="number"
            label="Preço"
            ref="Lat"
            filled
          />
        </v-col>
        <v-col cols="12" sm="5">
          <v-file-input
            dense
            v-model="pictures"
            @change="getValuesTexture(pictures)"
            placeholder="Select your textures"
            prepend-icon="mdi-paperclip"
            label="Foto"
            filled
            accept=".jpg, .png, .tiff"
          >
            <template v-slot:selection="{ index, text }">
              <v-chip v-if="index < 2" color="green accent-4" dark label small>
                {{ text }}
              </v-chip>
            </template>
          </v-file-input>
        </v-col>
      </v-row>
      <v-row>
        <!-- <v-col class="pl-4 pr-4" cols="12" sm="6" md="6" lg="6"> -->
        <v-btn
          style="text-decoration: underline"
          color="red"
          text
          dark
          bottom
          @click="clearFields"
        >
          Clear Fields
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn color="success" right :disabled="!valid" @click="addGDCPackage">
          Save
          <v-icon>mdi-check-bold</v-icon>
        </v-btn>
        <!-- </v-col> -->
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
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
    title: "",
    description: "",
    price: 0,
    picture: "",
    valid: false,
    windowSize: {
      x: 0,
      y: 0,
    },
  }),
  async mounted() {
    debugger;
    this.$store.dispatch("product/add_element");
  },
  computed: {
    // title: {
    //   get() {
    //     return this.$store.state.products.PRODUCT.title;
    //   },
    //   set(val) {
    //     this.setTitle(val);
    //   },
    // },
    // description: {
    //   get() {
    //     return this.$store.state.products.PRODUCT.description;
    //   },
    //   set(val) {
    //     this.setDescription(val);
    //   },
    // },
    // price: {
    //   get() {
    //     return this.$store.state.products.PRODUCT.price;
    //   },
    //   set(val) {
    //     this.setPrice(val);
    //   },
    // },
    // picture: {
    //   get() {
    //     return this.$store.state.products.PRODUCT.picture;
    //   },
    //   set(val) {
    //     this.setPicture(val);
    //   },
    // },
  },
  methods: {
    ...mapMutations("products", {
      setTitle: `SET_TITLE`,
      setDescription: `SET_DESCRIPTION`,
      setPrice: `SET_PRICE`,
      setPicture: `SET_PICTURE`,
    }),
  },
};
</script>

<style>
</style>
