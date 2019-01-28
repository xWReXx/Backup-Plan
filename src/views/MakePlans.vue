<template>
  <v-container fluid ma-0 pa-0 fill-height>
    <v-layout text-xs-center wrap justify-center>
      <v-flex xs12>
        <v-img max-height='400' :src="require('../assets/hurricane.png')" class='my-3' contain></v-img>
      </v-flex>
      <v-flex mb-4>
        <h2 class='display-1 font-weight-bold mb-2'>Do you have a plan?</h2>
        <Signup />
        <Login />
      </v-flex>
      <v-flex mb-4 xs10>
          <v-layout v-for='item in donations' :key='item.zip'>
            <v-flex mb-4 xs12 sm6 offset-sm3>
              <v-card >
                <v-img class='white--text' height='200px' :src="require('../assets/house.jpg')">
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class='headline'>Top 10 Australian beaches</span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-img>
                <v-card-title>
                  <div>
                    <span class='grey--text'>Number 10</span>
                    <br>
                    <span>{{item.city}}</span>
                    <br>
                    <span>{{item.state}}</span>
                    <br>
                    <span>{{item.zip}}</span>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn flat color='red'>Make Plans</v-btn>
                  <v-btn flat color='red'>Explore</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    donations: [
      {
        zip: '80232',
        city: 'LakeWood ',
        state: 'Colorado',
        familyfriendly: true,
        petFrienly: true,
        img: '../assets/house.jpg'
      },
      {
        zip: '80231',
        city: 'LakeWood ',
        state: 'Colorado',
        familyfriendly: true,
        petFrienly: true,
        img: '../assets/house.jpg'
      },
      {
        zip: '80233',
        city: 'LakeWood ',
        state: 'Colorado',
        familyfriendly: true,
        petFrienly: true,
        img: '../assets/house.jpg'
      },
      {
        zip: '80234',
        city: 'LakeWood ',
        state: 'Colorado',
        familyfriendly: true,
        petFrienly: true,
        img: '../assets/house.jpg'
      },
      {
        zip: '80235',
        city: 'LakeWood ',
        state: 'Colorado',
        familyfriendly: true,
        petFrienly: true,
        img: '../assets/house.jpg'
      }
    ]
  })
}
</script>

<style>
  .test {
    text-align: left !important;
  }
</style>
