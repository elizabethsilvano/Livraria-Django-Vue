<template>
  <v-app>
    <v-app-bar app>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <v-btn @click="logout">Sair</v-btn>
      </div>
    </v-app-bar>
    <v-main>
      <v-container>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import { mapActions } from 'vuex'

export default {
    methods: {
        ...mapActions('auth', ['logout'])
    }
};
</script>



