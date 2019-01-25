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
      <!-- <div class="test"></div> -->
      <v-divider></v-divider>
      <v-list two-line subheader>
        <v-list-tile avatar>
          <v-list-tile-content>
            <v-list-tile-title>Name</v-list-tile-title>
            <v-list-tile-sub-title>Fabien Combs</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile avatar>
          <v-list-tile-content>
            <v-list-tile-title>Birth Date</v-list-tile-title>
            <v-list-tile-sub-title>11/22/1985</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile avatar>
          <v-list-tile-content>
            <v-list-tile-title>Address</v-list-tile-title>
            <v-list-tile-sub-title>1234 Big Walk Way</v-list-tile-sub-title>
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
        <v-dialog v-model="dialog" persistent max-width="290">
          <v-btn slot="activator" color="red" dark>Edit Profile</v-btn>
          <v-card>
            <v-card-title class="headline">Use Google's location service?</v-card-title>
            <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" flat @click="dialog = false">Disagree</v-btn>
              <v-btn color="green darken-1" flat @click="dialog = false">Agree</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    dialog: false
  })
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
