<template>
  <v-container fill-height>
    <v-layout row justify-center>
      <v-flex xs10>
        <v-card>
          <v-img :src="profile.profileImg" height='300px'>
            <v-layout column fill-height>
              <v-spacer></v-spacer>
              <v-card-title class='white--text pl-5 pt-5'>
                <div class='display-1'>{{profile.firstName}} {{profile.lastName}}</div>
              </v-card-title>
            </v-layout>
          </v-img>

          <v-list two-line>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon color='white'>mail</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title>{{profile.email}}</v-list-tile-title>
                <v-list-tile-sub-title>Email</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-divider></v-divider>

            <v-list-tile>
              <v-list-tile-action>
                <v-icon color='white'>date_range</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title>{{profile.birthDate}}</v-list-tile-title>
                <v-list-tile-sub-title>Birth Date</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-divider></v-divider>

            <v-list-tile>
              <v-list-tile-action>
                <v-icon color='white'>location_on</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title>{{profile.adress}}</v-list-tile-title>
                <v-list-tile-sub-title>{{profile.city}}, {{profile.state}} {{profile.zip}}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-divider></v-divider>

            <v-list-tile>
              <v-list-tile-content>
                <v-flex column align-self-center class='editProfile'>
                  <EditProfile/>
                </v-flex>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile>
              <v-list-tile-content>
                <v-flex column align-self-center>
                  <v-btn
                  @click.native="selectFile"
                  class='editPicture'
                  color='red'
                  dark
                >Edit Picture</v-btn>
                  <input
                    id="files"
                    type="file"
                    name="file"
                    ref="uploadInput"
                    accept="image/*"
                    style='display: none'
                    :multiple="false"
                    @change="detectFiles($event)"
                  />
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
import '@firebase/firestore'

export default {
  name: 'Profile',
  components: {
    EditProfile
  },
  data: () => ({
    user: null,
    profile: {},
    fileName: '',
    uploadTask: '',
    downloadUrl: null
  }),
  watch: {
    menu (val) {
      val && this.$nextTick(() => (this.$refs.picker.activePicker = 'YEAR'))
    }
  },
  methods: {
    save (date) {
      this.$refs.menu.save(date)
    },
    selectFile () {
      this.$refs.uploadInput.click()
    },
    detectFiles (e) {
      let fileList = e.target.files || e.dataTransfer.files
      Array.from(Array(fileList.length).keys()).map(x => {
        this.upload(fileList[x])
      })
    },
    upload (file) {
      this.fileName = file.name
      firebase.storage().ref('/' + this.user.id + '/profilePicture/' + file.name).put(file)
        .then(uploadTaskSnapshot => {
          return uploadTaskSnapshot.ref.getDownloadURL()
        })
        .then(imageUrl => {
          console.log(imageUrl)
          this.downloadUrl = imageUrl
        })
    }
  },
  created () {
    // getting authenicated user
    let ref = db.collection('users')
    ref
      .where('user_id', '==', firebase.auth().currentUser.uid)
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.user = doc.data()
          this.user.id = doc.id
        })
      })
    // getting authenticated user's profile
    ref
      .doc(this.$route.params.id)
      .get()
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
