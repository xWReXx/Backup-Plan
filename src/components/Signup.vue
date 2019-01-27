<template>
  <v-dialog v-model='dialog' persistent max-width='600px'>
    <v-btn slot='activator' color='red' dark>Edit Profile</v-btn>
    <v-card>
      <v-card-title>
        <span class='headline'>User Profile</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12 sm6 md4>
              <v-text-field v-model='userName' label='User Name*' required></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md4>
              <v-text-field v-model='firstName' label='Legal first name*' required></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md4>
              <v-text-field v-model='lastName' label='Legal last name*' persistent-hint required></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field v-model='email' label='Email*' required></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                type='password'
                prepend-icon='lock'
                v-model='password'
                label='Password*'
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-menu
                ref='menu'
                :close-on-content-click='false'
                v-model='menu'
                :nudge-right='40'
                lazy
                transition='scale-transition'
                offset-y
                full-width
                min-width='290px'
              >
                <v-text-field
                  slot='activator'
                  v-model='birthDate'
                  label='Birthday date'
                  prepend-icon='event'
                  readonly
                ></v-text-field>
                <v-date-picker
                  ref='picker'
                  v-model='birthDate'
                  :max='new Date().toISOString().substr(0, 10)'
                  min='1950-01-01'
                  @change='save'
                ></v-date-picker>
              </v-menu>
            </v-flex>
            <v-flex xs12>
              <v-text-field v-model='adress' label='Adress*' required></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field v-model='city' label='City*' required></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field v-model='state' label='State*' required></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field v-model='zip' label='Zipcode*' required></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color='red' flat @click='signupModal = false'>Cancel</v-btn>
        <v-btn color='red' flat @click='signup'>Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <!-- <v-dialog v-model='signupModal' persistent max-width='290'>
    <v-btn slot='activator' color='red' dark>Signup</v-btn>
    <v-flex xs12 sm8 md4>
      <v-card class='elevation-12'>
        <v-toolbar dark color='red'>
          <v-toolbar-title>Sign Up</v-toolbar-title>
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
          <v-btn color='red' v-on:click='signup'>Sign Up</v-btn>
          <v-btn color='red' @click='signupModal = false'>Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-dialog>-->
</template>

<script>
import firebase from 'firebase'

export default {
  data: () => ({
    userName: '',
    firstName: '',
    lastName: '',
    birthDate: '',
    adress: '',
    city: '',
    state: '',
    zip: '',
    email: '',
    password: '',
    signupModal: false,
    menu: false
  }),
  watch: {
    menu (val) {
      val && this.$nextTick(() => (this.$refs.picker.activePicker = 'YEAR'))
    }
  },
  methods: {
    signup (e) {
      const db = firebase.firestore()
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            return db.collection('users').doc(user.user.uid).set({
              userName: this.userName,
              firstName: this.firstName,
              birthDate: this.birthDate,
              adress: this.adress,
              city: this.city,
              state: this.state,
              zip: this.zip,
              email: this.email
            }).then(() => {
              this.$router.replace('/profile')
            })
          },
          err => {
            alert(err.message)
          }
        )
      e.preventDefault()
    },
    save (date) {
      this.$refs.menu.save(date)
    }
  }
}
</script>
