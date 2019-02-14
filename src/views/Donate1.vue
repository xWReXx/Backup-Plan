<template>
  <v-container fluid ma-0 pa-0 fill-height>
    <v-layout text-xs-center wrap justify-center>
      <v-flex xs12>
        <v-img max-height='400' :src="require('../assets/hurricane.png')" class='my-3' contain></v-img>
      </v-flex>
      <PostDonate />
      <v-flex mt-5 mb-5>
        <h2 class='display-1 font-weight-bold mb-2'>Your Listed Spaces</h2>
      </v-flex>
      <v-flex mb-4 xs10>
          <v-layout>
            <v-flex mb-4 xs12 sm6 offset-sm3>
              <v-card >
                <v-img class='white--text' height='200px' :src="require('../assets/house3.jpg')">
                  <v-container fill-height fluid>
                  </v-container>
                </v-img>
                <v-card-title>
                  <div>
                    <span class='grey--text'>Number 10</span>
                    <br>
                    <span>1234 Big Walk Way</span>
                    <br>
                    <span>Lakewood Colorado, 80232</span>
                    <br>
                    <span> Space for 3 people</span>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <EditListing />
                  <v-btn to="/donate" flat color='red'>Remove Listing</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import EditListing from '../components/EditListing'

export default {
  components: {
    EditListing
  }
}
</script>
