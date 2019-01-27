<template>
  <v-dialog v-model='signupModal' persistent max-width='290'>
    <v-btn slot='activator' color='red' dark>Signup</v-btn>
    <v-flex xs12 sm8 md4>
      <v-card class='elevation-12'>
        <v-toolbar dark color='red'>
          <v-toolbar-title>Sign Up</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field
              vmodel='email'
              prepend-icon='person'
              name='login'
              label='Email'
              type='text'
            ></v-text-field>
            <v-text-field
              vmodel='password'
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
          <v-btn color='red' v-on:click='signup'>Sign Up</v-btn>
          <v-btn color='red' @click='signupModal = false'>Cancel</v-btn>
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
    signupModal: false
  }),
  methods: {
    signup (e) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email.trim.toString().trim(), this.password)
        .then(
          user => {
            alert(`Account Created For ${user.email}`)
            this.$router.push('/profile')
          },
          err => {
            alert(err.message)
          }
        )
      e.preventDefault()
    }
  }
}
</script>
