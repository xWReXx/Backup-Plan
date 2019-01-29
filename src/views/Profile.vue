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
      <h1>Fcombs85</h1>
      <!-- <div class='test'></div> -->
      <v-divider></v-divider>
      <v-list two-line subheader>
        <v-list-tile avatar>
          <v-list-tile-content>
            <v-list-tile-title>Name</v-list-tile-title>
            <v-list-tile-sub-title>{{ profile[0].firstName + " " + profile[0].lastName }}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile avatar>
          <v-list-tile-content>
            <v-list-tile-title>Birth Date</v-list-tile-title>
            <v-list-tile-sub-title>{{ profile[0].birthday }}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile avatar>
          <v-list-tile-content>
            <v-list-tile-title>Address</v-list-tile-title>
            <v-list-tile-sub-title>{{ profile[0].birthday }}</v-list-tile-sub-title>
            <v-list-tile-sub-title>Lakewood</v-list-tile-sub-title>
            <v-list-tile-sub-title>Colorado 80232</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile avatar>
          <v-list-tile-content>
            <v-list-tile-title>Email</v-list-tile-title>
            <v-list-tile-sub-title>fabiancombs@gmail.com</v-list-tile-sub-title>
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

export default {
  components: {
    EditProfile
  },
  data: () => ({
    message: '',
    profile: []
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
    // fetching from firebase
    db.collection('users')
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          console.log(doc.data())
          let userProfile = doc.data()
          userProfile.id = doc.id
          this.profile.push(userProfile)
        })
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
