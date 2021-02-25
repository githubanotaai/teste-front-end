export const category = () => ({
  category_title: "",
  products: []
});

export const state = () => ({
  CATEGORY: undefined,
  CATEGORY_LIST: []
});

export const getters = {};

export const mutations = {
  CREATE_CATEGORY() {
    state.CATEGORY = new category();
  },
  SET_CATEGORY_TITLE: (state, payload) => {
    state.CATEGORY.category_title = payload;
  },
  SET_CATEGORY: state => {
    state.CATEGORY_LIST.push(state.CATEGORY);
  }
};

export const actions = {
  update_category({ commit }) {
    commit("SET_CATEGORY");
  },
  add_product({ commit, rootState }) {
    const element = rootState.elements.ELEMENT;
    commit("ADD_PRODUCT_TO_CATEGORY", element);
  }
};
