<template>
  <v-container fluid>
    <v-layout text-xs-center wrap>
      <v-flex xs12>
        <v-img :src="require('../assets/hurricane.png')" class='my-3' contain></v-img>
      </v-flex>
      <v-flex mb-4>
        <h2 class='display-2 font-weight-bold mb-2'>Do you have a plan?</h2>
        <v-dialog v-model="signup" persistent max-width="290">
      <v-btn slot="activator" color="red" dark>Sign Up</v-btn>
      <v-card>
        <v-card-title class="headline">Sign Up?</v-card-title>
        <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" flat @click="signup = false">Create Account</v-btn>
          <v-btn color="red" flat @click="signup = false">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="login" persistent max-width="290">
      <v-btn slot="activator" color="red" dark>Log In</v-btn>
      <v-card>
        <v-card-title class="headline">Use Google's location service?</v-card-title>
        <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat @click="login = false">Disagree</v-btn>
          <v-btn color="green darken-1" flat @click="login = false">Agree</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
      </v-flex>
      <v-flex xs12>
        <h2>Install to Home Screen</h2>
          <img class="appIcon" src="../assets/backupplan48.svg" alt="blank">
      </v-flex>

      <v-flex xs12 mb-5>
        <h2 class='headline font-weight-bold mb-3'>Important Links</h2>

        <v-layout justify-center>
          <a
            v-for='(link, i) in importantLinks'
            :key='i'
            :href='link.href'
            class='subheading mx-2'
            target='_blank'
          >{{ link.text }}</a>
        </v-layout>
      </v-flex>

      <v-flex xs12 mb-5>
        <h2 class='headline font-weight-bold mb-2'>Ecosystem</h2>

        <v-layout justify-center>
          <a
            v-for='(eco, i) in ecosystem'
            :key='i'
            :href='eco.href'
            class='subheading mx-2'
            target='_blank'
          >{{ eco.text }}</a>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style>
  .appIcon {
    height: 72px;
    width: 72px;
  }
</style>

<script>
export default {
  data: () => ({
    signup: false,
    login: false,
    ecosystem: [
      {
        text: 'vuetify-loader',
        href: 'https://github.com/vuetifyjs/vuetify-loader'
      },
      {
        text: 'github',
        href: 'https://github.com/vuetifyjs/vuetify'
      },
      {
        text: 'awesome-vuetify',
        href: 'https://github.com/vuetifyjs/awesome-vuetify'
      }
    ],
    importantLinks: [
      {
        text: 'Documentation',
        href: 'https://vuetifyjs.com'
      },
      {
        text: 'Chat',
        href: 'https://community.vuetifyjs.com'
      },
      {
        text: 'Made with Vuetify',
        href: 'https://madewithvuetifyjs.com'
      },
      {
        text: 'Twitter',
        href: 'https://twitter.com/vuetifyjs'
      },
      {
        text: 'Articles',
        href: 'https://medium.com/vuetify'
      }
    ],
    whatsNext: [
      {
        text: 'Explore components',
        href: 'https://vuetifyjs.com/components/api-explorer'
      },
      {
        text: 'Select a layout',
        href: 'https://vuetifyjs.com/layout/pre-defined'
      },
      {
        text: 'Frequently Asked Questions',
        href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions'
      }
    ]
  })
}
</script>
