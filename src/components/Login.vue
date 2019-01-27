<template>
  <v-dialog v-model='loginModal' persistent max-width='290'>
    <v-btn slot='activator' color='red' dark>Log In</v-btn>
    <v-flex xs12 sm8 md4>
      <v-card class='elevation-12'>
        <v-toolbar dark color='red'>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field
              v-model='email'
              prepend-icon='person'
              name='login'
              label='Email'
              type='text'
            ></v-text-field>
            <v-text-field
              v-model='password'
              prepend-icon='lock'
              name='password'
              label='Password'
              id='password'
              type='password'
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color='red' v-on:click='login'>Login</v-btn>
          <v-btn color='red' @click='loginModal = false'>Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-dialog>
</template>

<script>
import firebase from 'firebase'

export default {
  data: () => ({
    email: '',
    password: '',
    loginModal: false
  }),
  methods: {
    login () {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
          this.$router.replace('/dashboard')
        })
    }
  }
}
</script>
