<template>
  <q-page>
    <!-- Desktop -->
    <div v-if="this.$q.platform.is.desktop" class="flex flex-center">
      <q-toolbar class="bg-white text-grey" style="height: 20vh"> </q-toolbar>

      <q-card bordered class="bg-grey-0" style="width: 30vw;">
        <q-card-section>
          <p class="text-h5 q-pt-xl q-mx-md text-primary">
            Esqueci minha senha
          </p>
          <p class="q-mx-md q-mb-md text-grey">
            Informe seu E-mail para recuperar a senha
          </p>
        </q-card-section>

        <q-card-section>
          <div class="row items-center justify-center q-px-sm q-pb-sm">
            <q-input
              v-model="emailAddress"
              label="Email"
              outlined
              readonly
              :rules="[val => !!val || '* Obrigatório']"
              lazy-rules
              @keyup.enter="Reset"
              style="width: 85vw"
            />
          </div>
          <div class="row items-center justify-center q-px-sm q-pt-xl"></div>
        </q-card-section>
        <q-card-actions class="justify-between q-pa-lg">
          <q-btn
            standard
            @click="Login()"
            label="Cancelar"
            style="width: 45%"
          />
          <q-btn
            class="bg-primary text-white "
            standard
            @click="Reset"
            label="Recuperar"
            style="width: 45%"
          />
        </q-card-actions>
      </q-card>
    </div>
    <!-- Mobile -->
    <div v-if="this.$q.platform.is.mobile">
      <q-toolbar class="bg-white text-grey q-pt-lg">
        <q-btn flat round dense icon="keyboard_arrow_left" @click="Login()" />
      </q-toolbar>
      <div class="col flex flex-center">
        <div class="col-10" style="width: 95vw; height: 70vh">
          <p class="text-h5 q-pt-xl q-mx-md text-primary">
            Esqueci minha senha
          </p>
          <p class="q-mx-md q-mb-xl text-grey">
            Informe seu E-mail para recuperar a senha
          </p>
          <div class="row items-center justify-center q-px-sm q-pb-sm">
            <q-input
              class=""
              v-model="emailAddress"
              label="E-mail"
              readonly
              outlined
              :rules="[val => !!val || '* Obrigatório']"
              lazy-rules
              style="width: 85vw"
            />
          </div>
        </div>
        <div class="row items-center justify-center q-px-sm q-pt-xl">
          <q-btn
            class="bg-secondary text-white "
            standard
            no-caps
            @click="Reset"
            label="Redefinir"
            style="width: 85vw"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'EsqueciSenha',
  data () {
    return {
      emailAddress: 'user@test.com',
      teal: true,
      isPwd: true,
      password: ''
    }
  },
  methods: {
    Reset () {
      const vm = this
      this.$functions().showNotify(
        'Um link para redefinir a senha foi enviado para seu email!',
        'top',
        'sucesso'
      )
      setTimeout(function () {
        vm.$functions().showNotify(
          'Email recebido - Redefinição de senha. Sua senha é: user123',
          'top',
          'aviso'
        )
      }, 2000)
    },
    Login () {
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>
