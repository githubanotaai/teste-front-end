<template></template>

<script>
import serverAxios from "@/api/axios/serverAxios.js";
import Logo from "~/components/Logo.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";

export default {
  components: {
    Logo,
    VuetifyLogo,
  },
  data: () => ({
    waitingSignIn: false,
    username: "",
    password: "",
    passwordLessCripto: "",
    users: [],
    headers: [
      { text: "Name", value: "username", width: "40%" },
      { text: "Senha", value: "passwordLessCripto", width: "20%" },
      { text: "Senha Encriptada", value: "password", width: "20%" },
    ],
    windowSize: {
      x: 0,
      y: 0,
    },
  }),
  async mounted() {
    this.users = await this.getUserData();
    console.log(this.users);
  },
  methods: {
    async getUserData() {
      return (await serverAxios.get("/api/")).data;
    },
  },
};
</script>
