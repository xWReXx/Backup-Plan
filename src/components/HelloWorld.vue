<template>
  <v-container fluid ma-0 pa-0>
    <v-layout text-xs-center wrap>
      <v-flex xs12>
        <v-img max-height="400" :src="require('../assets/hurricane.png')" class='my-3' contain></v-img>
      </v-flex>
      <v-flex mb-4>
        <h2 class='display-1 font-weight-bold mb-2'>Do you have a plan?</h2>
        <v-dialog v-model='signup' persistent max-width='290'>
      <v-btn slot='activator' color='red' dark>Sign Up</v-btn>
      <v-card>
        <v-card-title class='headline'>Sign Up?</v-card-title>
        <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color='red' flat @click='signup = false'>Create Account</v-btn>
          <v-btn color='red' flat @click='signup = false'>Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model='login' persistent max-width='290'>
      <v-btn slot='activator' color='red' dark>Log In</v-btn>
      <v-flex xs12 sm8 md4>
            <v-card class='elevation-12'>
              <v-toolbar dark color='red'>
                <v-toolbar-title>Login</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                  <v-btn
                    icon
                    large
                    :href='source'
                    target='_blank'
                    slot='activator'
                  >
                    <v-icon large>code</v-icon>
                  </v-btn>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon='person' name='login' label='User Name' type='text'></v-text-field>
                  <v-text-field prepend-icon='lock' name='password' label='Password' id='password' type='password'></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color='red'>Login</v-btn>
                <v-btn color='red' @click="login = false">Cancel</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
    </v-dialog>
      </v-flex>
      <v-flex xs12>
        <h2>Install to Home Screen</h2>
          <img class='appIcon' src='../assets/backupplan48.svg' alt='blank'>
      </v-flex>

      <v-flex xs12 mb-5>
        <h2 class='headline font-weight-bold mb-3'>About Backup Plan</h2>

        <v-layout  mt-15 justify-center>
          <v-flex xs10>
            Backup plan aims to connect people with extra living spaces to people who are evacuating a disaster area.
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
export default {
  data: () => ({
    signup: false,
    login: false,
  })
}
</script>
