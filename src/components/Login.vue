<template>
  <v-dialog v-model='loginModal' persistent max-width='450'>
    <v-btn slot='activator' color='red' dark>Log In</v-btn>
    <v-flex s12>
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
              type='password'
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn color='red' v-on:click='login'>Login</v-btn>
          <v-btn color='red' @click='loginModal = false'>Cancel</v-btn>
        </v-card-actions>
          <p class='feedback' v-if='feedback'>{{this.feedback}}</p>
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
    loginModal: false,
    feedback: null
  }),
  methods: {
    login () {
      if (this.email && this.password) {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(user => {
            this.$router.replace('/dashboard')
          })
          .catch(err => {
            this.feedback = err.message
          })
        this.feedback = null
      } else {
        this.feedback = 'Please enter an email and password'
      }
    }
  }
}
</script>

<style>
  .feedback {
    margin-left: 7px;
    text-align: center;
    padding-bottom: 10px;
  }
</style>
