<template>
  <q-page class="flex flex-center">
    <!-- Desktop -->
    <div
      v-if="this.$q.platform.is.desktop"
      class="row fullscreen justify-center items-center content-center"
    >
      <div class=" col-sm-6 col-md-6 col-lg-6" style="padding: 0 10% 0 10%">
        <q-card class=" shadow-0">
          <q-card-section style="padding:0px" class="text-black">
            <p class="text-h6 text-weight-bold text-primary">Login</p>
            <div>
              <p class="text-primary" style="margin-bottom: 4px">E-mail</p>
              <q-input
                color="grey"
                outlined
                bottom-slots
                type="email"
                v-model.trim="email"
                lazy-rules
              />
              <p class="text-primary" style="margin-bottom: 4px">Senha</p>
              <q-input
                color="grey-5"
                outlined
                bottom-slots
                :type="isPwd ? 'password' : 'text'"
                v-model="password"
                :rules="[
                  val => !!val || '* Obrigatório',
                  val =>
                    val.length >= 6 ||
                    'A senha deve conter pelo menos 6 digitos'
                ]"
                lazy-rules
                @keyup.enter="login"
                style="padding-bottom: 12px"
              >
                <template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  />
                </template>
              </q-input>
            </div>
            <div>
              <q-toggle
                class="text-grey"
                label="Lembrar"
                v-model="remember"
                color="primary"
              />
              <div
                v-ripple
                class="float-right relative-position"
                @click="ForgotPassword"
                style="padding-top: 10px;cursor: pointer"
              >
                Esqueceu a senha?
              </div>
            </div>
          </q-card-section>
        </q-card>
        <q-btn
          class="text-white full-width bg-primary"
          @click="login"
          label="Entrar"
          :disable="password.length < 6"
          style="margin-top: 30px;"
        />
      </div>
      <div
        class="col-sm-6 col-sm-6 col-lg-6 items-center justify-center text-center xs-hide"
        style="padding: 100% 0 100% 0;background-color: #19769f"
      >
        <div style="row">
          <q-img
            class="q-ma-lg justify-center"
            ripple
            style="width:300px"
            src="~assets/quasar-logo-full.svg"
          />
        </div>
        <div style="row">
          <h2 class="text-white no-padding">Anota AI Test</h2>
        </div>
      </div>
    </div>

    <!-- Mobile -->
    <div v-if="this.$q.platform.is.mobile" class="col flex flex-center">
      <div class="row items-center justify-center">
        <img
          class="no-padding no-margin"
          src="~assets/quasar-logo-full.svg"
          style="width: 40vw"
        />
        <h4 class="text-primary no-padding">Anota AI Test</h4>
      </div>
      <div class="" style="width: 95vw">
        <p class="text-h5 q-mx-md text-primary" style="">Entrar</p>
        <div class="row items-center justify-center q-px-sm q-pb-sm">
          <q-input
            v-model="email"
            class=""
            label="Email"
            outlined
            style="width: 85vw"
          />
        </div>
        <div class="row items-center justify-center q-px-sm q-pb-sm">
          <q-input
            v-model="password"
            outlined
            :type="isPwd ? 'password' : 'text'"
            label="Senha"
            style="width: 85vw"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
        </div>
        <div class="row items-center justify-between q-px-sm q-pt-sm">
          <q-toggle
            class="text-grey"
            label="Lembrar"
            v-model="remember"
            color="secondary"
          />
          <q-btn
            class="text-grey"
            flat
            no-caps
            label="Esqueci minha senha"
            @click="ForgotPassword"
          />
        </div>
        <div class="row items-center justify-center q-px-sm q-pt-md">
          <q-btn
            class="bg-secondary text-white"
            standard
            no-caps
            label="Entrar"
            :disable="password.length < 6"
            style="width: 85vw"
            @click="login"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      remember: false,
      rememberUser: {
        email: '',
        pass: ''
      },
      isPwd: true,
      email: '',
      password: '',
      rememberPass: false,
      rememberUserPass: ''
    }
  },
  mounted () {
    this.VerifyUserRemember()
  },
  methods: {
    ForgotPassword () {
      this.$router.push({ name: 'EsqueciSenha' })
    },
    Home () {
      this.$router.push({ name: 'Index' })
    },
    login () {
      if (this.remember) {
        this.rememberUser.email = this.email
        this.rememberUser.pass = this.password
        window.localStorage.setItem(
          'remember',
          JSON.stringify(this.rememberUser)
        )
      } else {
        this.remember = false
        window.localStorage.removeItem('remember')
      }

      if (this.email === 'user@test.com' && this.password === 'user123') {
        this.Home()
      } else {
        this.$functions().showNotify(
          'Email e/ou senha incorreta!',
          'top',
          'erro'
        )
      }
    },
    VerifyUserRemember () {
      if (window.localStorage.getItem('remember')) {
        this.remember = true
        this.email = JSON.parse(window.localStorage.getItem('remember')).email
        this.password = JSON.parse(
          window.localStorage.getItem('remember')
        ).pass
      } else {
        window.localStorage.removeItem('remember')
      }
    }
  }
}
</script>
