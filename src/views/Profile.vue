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

      <v-layout row justify-center>
        <v-dialog v-model="dialog" persistent max-width="600px">
          <v-btn slot="activator" color="red" dark>Edit Profile</v-btn>
          <v-card>
            <v-card-title>
              <span class="headline">User Profile</span>
            </v-card-title>
            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12 sm6 md4>
                    <v-text-field label="Legal first name*" required></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field label="Legal last name*" persistent-hint required></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field label="Email*" required></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-menu
                      ref="menu"
                      :close-on-content-click="false"
                      v-model="menu"
                      :nudge-right="40"
                      lazy
                      transition="scale-transition"
                      offset-y
                      full-width
                      min-width="290px"
                    >
                      <v-text-field
                        slot="activator"
                        v-model="birthDate"
                        label="Birthday date"
                        prepend-icon="event"
                        readonly
                      ></v-text-field>
                      <v-date-picker
                        ref="picker"
                        v-model="birthDate"
                        :max="new Date().toISOString().substr(0, 10)"
                        min="1950-01-01"
                        @change="save"
                      ></v-date-picker>
                    </v-menu>
                  </v-flex>
                  <v-flex xs12 sm6>
                    <v-autocomplete
                      :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                      label="Interests"
                      multiple
                    ></v-autocomplete>
                  </v-flex>
                </v-layout>
              </v-container>
              <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red" flat @click="dialog = false">Cancel</v-btn>
              <v-btn color="red" flat @click="dialog = false">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
import db from '@/firebase.js'

export default {
  data: () => ({
    dialog: false,
    menu: false,
    message: '',
    profile: [],
    birthDate: ''
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
