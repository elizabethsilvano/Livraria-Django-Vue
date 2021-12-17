<template>
  <v-container fluid>
    <v-card elevation="3">
      <v-card-title>Login</v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field v-model="usuario.username" label="Usuário" />
          <v-text-field
            v-model="usuario.password"
            :type="mostrarSenha ? 'text' : 'password'"
            label="Senha"
            :append-icon="mostrarSenha ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="mostrarSenha = !mostrarSenha"
          />
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="submitLogin">Acessar</v-btn>
      </v-card-actions>
    </v-card>
    <v-snackbar v-model="loginMessage" timeout="2000" :color="loginColor">
      {{ loginText }}
      <template v-slot:action="{ attrs }">
        <v-btn color="secundary" text v-bind="attrs" @click="loginMessage"
          >Fechar</v-btn
        >
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      mostrarSenha: false,
      usuario: {},
      loginMessage: false,
      loginText: '',
      loginColor: 'success'
    };
  },
  methods: {
    ...mapActions("auth", ["login", 'logout']),
    async submitLogin() {
      try {
        await this.login(this.usuario);
        this.loginMessage=true
        this.loginText="Login realizado com sucesso!";
        this.loginColor="success";
        this.$router.push({ name: "Home" });
      }catch(e) {
        this.logout()
        this.loginMessage=true
        this.loginText="Falha na autenticação"
        this.loginColor="error"
      }

    },
  },
};
</script>
