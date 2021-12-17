<template>
  <div>
   <h1>Principal - {{ loggedIn }}</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapState('auth', ['loggedIn'])
  }
}
</script>
