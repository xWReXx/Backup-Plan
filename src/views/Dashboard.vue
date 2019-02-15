<template>
  <v-container fluid ma-0 pa-0 fill-height>
    <v-layout text-xs-center wrap justify-center>
      <v-flex xs12>
        <v-img max-height='400' :src="require('../assets/hurricane.png')" class='my-3' contain></v-img>
      </v-flex>
      <v-flex mb-4 xs6>
        <h2 class='display-1 font-weight-bold mb-2'>Dashboard</h2>
        <v-btn block color="red" to='/makeplans' dark>SEARCH FOR A PLAN</v-btn>
        <v-btn block color="red" to='/donate' dark>DONATE SOME SPACE</v-btn>
        <v-btn block color="red" @click='goToProfile' dark>YOUR PROFILE</v-btn>
        <v-btn block color="red" dark>INSTALL</v-btn>
        <v-btn block color="red" dark @click='logout'>LOGOUT</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import firebase from 'firebase'
import db from '@/firebase.js'

export default {
  name: 'Dashboard',
  data () {
    return {
      user_id: null
    }
  },
  methods: {
    logout () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('/')
      })
    },
    goToProfile () {
      this.$router.push({ name: 'Profile', params: { id: this.user_id } })
    }
  },
  created () {
    let ref = db.collection('users')
    // get current user
    ref.where('user_id', '==', firebase.auth().currentUser.uid).get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.user_id = doc.id
          console.log(this.user_id)
        })
      })
  }
}
</script>
