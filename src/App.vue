<template>
  <v-app id='inspire' dark>
    <v-navigation-drawer v-model='drawer' fixed clipped app>
      <v-list dense>
        <v-list-tile v-for='item in items' :key='item.text' :to="item.url">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <Signup v-if='!user'/>
      <Login v-if='!user'/>
      <v-btn v-if='user' color='red' dark @click='logout'>Signout</v-btn>
    </v-navigation-drawer>
    <v-toolbar color='red' dense fixed clipped-left app>
      <v-toolbar-side-icon @click.stop='drawer = !drawer'></v-toolbar-side-icon>
      <v-icon dark class='mx-3'>fab fa-youtube</v-icon>
      <v-toolbar-title to="/#" class='mr-5 align-center'>
        <span class='title white--text'>Backup Plan</span>
      </v-toolbar-title>
      <v-layout row align-center style='max-width: 650px'></v-layout>
    </v-toolbar>
    <v-content>
      <v-container fill-height pa-0 ma-a>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Signup from './components/Signup.vue'
import Login from './components/Login.vue'
import firebase from 'firebase'

export default {
  name: 'App',
  components: {
    Signup,
    Login
  },
  data: () => ({
    drawer: null,
    user: null,
    items: [
      { icon: 'account_box', text: 'Profile', url: '/profile/:id' },
      { icon: 'group_add', text: 'Donate Some Space', url: '/donate/:id' },
      { icon: 'public', text: 'Update Public Status', url: '/status/:id' },
      { icon: 'directions_run', text: 'Make Backup Plans', url: '/makeplans' },
      { icon: 'settings', text: 'Dashboard', url: '/dashboard' }
    ]
  }),
  methods: {
    logout () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('/')
      })
    }
  },
  props: {
    source: String
  },
  created () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user
      } else {
        this.user = null
      }
    })
  }
}
</script>

<style>
  a:active {
  background-color: red !important;
}
  .primary--text {
    color: red !important;
}
</style>
