<template>
  <v-app>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-toolbar flat>
        <v-toolbar-title class="grey--text" v-text="title" />
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn to="/" icon>
          <v-icon>mdi-apps</v-icon>
        </v-btn>
        <v-btn to="/NewProduct" icon>
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-toolbar>
    </v-app-bar>

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }} Luiz Roupinha</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire",
        },
      ],
      title: "Front-end Test - Anota AI",
    };
  },
};
</script>
