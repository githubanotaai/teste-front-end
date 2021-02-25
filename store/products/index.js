let currentId = 90;

const generateId = () => {
  currentId++;
  return currentId;
};
export const product = () => ({
  description: "",
  id: generateId(),
  picture: "",
  price: 0,
  thumbnail: "",
  title: ""
});

export const state = () => ({
  PRODUCT: undefined,
  PRODUCTLIST: []
});

export const getters = {};

export const mutations = {
  CREATE_PRODUCT(state) {
    state.PRODUCT = new product();
  },
  SET_PRODUCT(state) {
    state.PRODUCTLIST.push(state.PRODUCT);
  },
  SET_TITLE: (state, payload) => {
    state.PRODUCT.title = payload;
  },
  SET_DESCRIPTION: (state, payload) => {
    state.PRODUCT.description = payload;
  },
  SET_PRICE: (state, payload) => {
    state.PRODUCT.price = payload;
  },
  SET_THUMBNAIL: (state, payload) => {
    state.PRODUCT.thumbnail = payload;
  },
  SET_PICTURE: (state, payload) => {
    state.PRODUCT.picture = payload;
  }
};

export const actions = {
  set_batch_elements(
    { commit },
    { description, title, thumbnail, price, picture }
  ) {
    commit("CREATE_PRODUCT");
    commit("SET_DESCRIPTION", description);
    commit("SET_TITLE", title);
    commit("SET_THUMBNAIL", thumbnail);
    commit("SET_PRICE", price);
    commit("SET_PICTURE", picture);
  }
};
