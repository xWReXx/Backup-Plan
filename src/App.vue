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
        <v-subheader class='mt-3 grey--text text--darken-1'>PRIVATE CONTACTS</v-subheader>
        <v-list>
          <v-list-tile v-for='item in items2' :key='item.text' avatar>
            <v-list-tile-avatar>
              <img :src='`https://randomuser.me/api/portraits/men/${item.picture}.jpg`' alt>
            </v-list-tile-avatar>
            <v-list-tile-title v-text='item.text'></v-list-tile-title>
          </v-list-tile>
        </v-list>
        <v-list-tile class='mt-3'>
          <v-list-tile-action>
            <v-icon color='grey darken-1'>public</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class='grey--text text--darken-1'>Update Public Status</v-list-tile-title>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon color='grey darken-1'>messages</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class='grey--text text--darken-1'>Private Messages</v-list-tile-title>
        </v-list-tile>
      </v-list>
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
export default {
  name: 'App',
  data: () => ({
    drawer: null,
    items: [
      { icon: 'account_box', text: 'Profile', url: '/profile' },
      { icon: 'group_add', text: 'Donate Some Space', url: '/donate' },
      { icon: 'history', text: 'History', url: '/History' },
      { icon: 'directions_run', text: 'Make Backup Plans', url: '/makeaplan' },
      { icon: 'settings', text: 'Manage Contacts', url: '/contacts' }
    ],
    items2: [
      { picture: 28, text: 'Joseph' },
      { picture: 38, text: 'Apple' },
      { picture: 48, text: 'Xbox Ahoy' },
      { picture: 58, text: 'Nokia' },
      { picture: 78, text: 'MKBHD' }
    ]
  }),
  props: {
    source: String
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
