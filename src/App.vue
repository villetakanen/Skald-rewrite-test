<template>
  <div id="app">
    <v-app-bar
      app
      elevation="1">
      <img id="logo" alt="Vue logo" src="./assets/logo.svg">
      <v-toolbar-title class="headline text-uppercase">Skald</v-toolbar-title>
    </v-app-bar>

    <v-content
      fluid
      grid-list-md>
      <v-layout wrap>
        <v-flex xs12 md3>
          <SiteCard title="demo"/>
          <v-btn>aa</v-btn>
        </v-flex>
      </v-layout>
    </v-content>

    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <v-content>
      <v-snackbar
        v-model="snackWithButtons"
        :timeout="timeout"
        bottom
        left
        class="snack"
      >
        {{ snackWithBtnText }}
        <v-spacer />
        <v-btn
          dark
          flat
          color="#00f500"
          @click.native="refreshApp"
        >
          {{ snackBtnText }}
        </v-btn>
        <v-btn
          icon
          @click="snackWithButtons = false"
        >
          <v-icon>close</v-icon>
        </v-btn>
      </v-snackbar>
    </v-content>
  </div>
</template>

<script>
import SiteCard from './components/cards/SiteCard'

export default {
  name: 'App',
  data () {
    return {
      refreshing: false,
      registration: null,
      snackBtnText: '',
      snackWithBtnText: '',
      snackWithButtons: false,
      timeout: 0
    }
  },
  components: {
    SiteCard
  },
  created () {
    // Listen for swUpdated event and display refresh snackbar as required.
    document.addEventListener('swUpdated', this.showRefreshUI, { once: true })
    // Refresh all open app tabs when a new service worker is installed.
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (this.refreshing) return
      this.refreshing = true
      window.location.reload()
    })
  },
  methods: {
    showRefreshUI (e) {
      // Display a snackbar inviting the user to refresh/reload the app due
      // to an app update being available.
      // The new service worker is installed, but not yet active.
      // Store the ServiceWorkerRegistration instance for later use.
      this.registration = e.detail
      this.snackBtnText = 'Refresh'
      this.snackWithBtnText = 'New version available!'
      this.snackWithButtons = true
    },
    refreshApp () {
      this.snackWithButtons = false
      // Protect against missing registration.waiting.
      if (!this.registration || !this.registration.waiting) { return }
      this.registration.waiting.postMessage('skipWaiting')
    }
  }
}
</script>

<style lang="scss">
#logo {
  max-height:40px;
  padding-right: 8px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
/* Provide better right-edge spacing when using an icon button there. */
.snack >>> .v-snack__content {
  padding-right: 16px;
}
</style>
