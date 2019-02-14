<template>
  <v-container fill-height>
    <v-layout align-center column>
      <v-badge color="#424242" overlap left>
        <span slot="badge">
          <v-icon color="red">edit</v-icon>
        </span>
        <v-avatar size="200">
          <img :src="`https://randomuser.me/api/portraits/men/29.jpg`" alt>
        </v-avatar>
      </v-badge>
      <h1>{{profile.userName}}</h1>
      <!-- <div class='test'></div> -->
      <v-divider></v-divider>
      <v-list two-line subheader>
        <v-list-tile avatar>
          <v-list-tile-content>
            <v-list-tile-title>Name</v-list-tile-title>
            <v-list-tile-sub-title>{{profile.firstName}} {{profile.lastName}} </v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile avatar>
          <v-list-tile-content>
            <v-list-tile-title>Birth Date</v-list-tile-title>
            <v-list-tile-sub-title>{{profile.birthDate}}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile avatar>
          <v-list-tile-content>
            <v-list-tile-title>Address</v-list-tile-title>
            <v-list-tile-sub-title>{{profile.adress}}</v-list-tile-sub-title>
            <v-list-tile-sub-title>{{profile.city}}</v-list-tile-sub-title>
            <v-list-tile-sub-title>{{profile.state}} {{profile.zip}}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile avatar>
          <v-list-tile-content>
            <v-list-tile-title>Email</v-list-tile-title>
            <v-list-tile-sub-title>{{profile.email}}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <EditProfile />
    </v-layout>
  </v-container>
</template>

<script>
import db from '@/firebase.js'
import EditProfile from '../components/EditProfile.vue'
import firebase from 'firebase'

export default {
  name: 'Profile',
  components: {
    EditProfile
  },
  data: () => ({
    user: null,
    profile: null
  }),
  watch: {
    menu (val) {
      val && this.$nextTick(() => (this.$refs.picker.activePicker = 'YEAR'))
    }
  },
  methods: {
    save (date) {
      this.$refs.menu.save(date)
    }
  },
  created () {
    //getting authenicated user
    let ref = db.collection('users')
    ref.where('user_id', '==', firebase.auth().currentUser.uid).get()
    .then ( snapshot => {
      snapshot.forEach(doc => {
        this.user = doc.data()
        this.user.id = doc.id
      })
    })
    //getting authenticated user's profile
    ref.doc(this.$route.params.id).get()
    .then( user => {
      this.profile = user.data()
      console.log(this.profile)
    })
  }
}
</script>

<style scoped>
.img-centered {
  display: flex;
  justify-content: center;
  align-items: center;
}

.test {
  border-bottom: 2px solid;
  width: 100vw;
  height: 20px;
  background-color: #303030;
  border-color: white;
}

h1 {
  margin-top: 10px;
}
</style>
