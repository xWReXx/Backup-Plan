<template>
  <v-container fill-height>

    <v-layout row justify-center>
      <v-flex xs10 sm6 offset-xs1>
        <v-card>
          <v-img
            src="https://cdn.vuetifyjs.com/images/lists/ali.png"
            height="300px"
          >
            <v-layout column fill-height>
              <v-spacer></v-spacer>
              <v-card-title class="white--text pl-5 pt-5">
                <div class="display-1 ">{{profile.firstName}} {{profile.lastName}}</div>
              </v-card-title>
            </v-layout>
          </v-img>
  
          <v-list two-line>
  
            <v-list-tile>
              <v-list-tile-action>
                <v-icon color="white">mail</v-icon>
              </v-list-tile-action>
  
              <v-list-tile-content>
                <v-list-tile-title>{{profile.email}}</v-list-tile-title>
                <v-list-tile-sub-title>Email</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-divider></v-divider>

            <v-list-tile>
              <v-list-tile-action>
                <v-icon color="white">date_range</v-icon>
              </v-list-tile-action>
  
              <v-list-tile-content>
                <v-list-tile-title>{{profile.birthDate}}</v-list-tile-title>
                <v-list-tile-sub-title>Birth Date</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
  
            <v-divider></v-divider>
  
            <v-list-tile>
              <v-list-tile-action>
                <v-icon color="white">location_on</v-icon>
              </v-list-tile-action>

           

              <v-list-tile-content>
                <v-list-tile-title>{{profile.adress}}</v-list-tile-title>
                <v-list-tile-sub-title>{{profile.city}}, {{profile.state}} {{profile.zip}}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-divider></v-divider>

            <v-list-tile>
              <v-list-tile-content>
                <v-flex column align-self-center class="editProfile">  
                  <EditProfile />
                </v-flex>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile>
              <v-list-tile-content>
                <v-flex column align-self-center>  
                  <v-btn class="editPicture" color="red" dark>Edit Picture</v-btn>
                </v-flex>
              </v-list-tile-content>
            </v-list-tile>

          </v-list>
        </v-card>
      </v-flex>
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
    profile: {}
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
    // getting authenicated user
    let ref = db.collection('users')
    ref.where('user_id', '==', firebase.auth().currentUser.uid).get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.user = doc.data()
          this.user.id = doc.id
        })
      })
    // getting authenticated user's profile
    ref.doc(this.$route.params.id).get()
      .then(user => {
        this.profile = user.data()
      })
  }
}
</script>

<style scoped>
.editProfile {
  margin-top: 35px;
}

.editPicture {
  margin-top: 10px;
}
</style>
