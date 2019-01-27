<template>
  <v-container fluid ma-0 pa-0>
    <v-layout text-xs-center wrap>
      <v-flex xs12>
        <v-img max-height='400' :src="require('../assets/hurricane.png')" class='my-3' contain></v-img>
      </v-flex>
      <v-flex mb-4>
        <h2 class='display-1 font-weight-bold mb-2'>Do you have a plan?</h2>
        <Signup />
        <Login />
      </v-flex>
      <v-flex xs12>
        <h2>Install to Home Screen</h2>
        <img class='appIcon' src='../assets/backupplan48.svg' alt='blank'>
      </v-flex>

      <v-flex xs12 mb-5>
        <h2 class='headline font-weight-bold mb-3'>About Backup Plan</h2>

        <v-layout mt-15 justify-center>
          <v-flex
            xs10
          >Backup plan aims to connect people with extra living spaces to people who are evacuating a disaster area.
            <v-layout justify-center>
              <v-btn mt-15 to='/about' color='red' dark>Learn More</v-btn>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style>
.appIcon {
  height: 72px;
  width: 72px;
}
</style>

<script>
import Signup from '../components/Signup.vue'
import Login from '../components/Login.vue'

export default {
  components: {
    Signup,
    Login
  },
  data: () => ({
    signup: false,
    login: false
  })
}
</script>
