<template>
  <v-container fluid ma-0 pa-0 fill-height>
    <v-layout text-xs-center wrap justify-center>
      <v-flex xs12>
        <v-img max-height='400' :src="require('../assets/hurricane.png')" class='my-3' contain></v-img>
      </v-flex>
      <v-flex mb-4 xs10>
        <v-list dense>
        <v-list-tile v-for='item in donations' :key='item.zip'>
          <v-list-tile-action>
            <img :src="item.img" alt="blank">
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.zip }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    donations: [
      { zip: '80232',
        city: 'LakeWood ',
        state: 'Colorado',
        familyfriendly: true,
        petFrienly: true,
        img: '../assets/house.jpg'
      },
      { zip: '80232',
        city: 'LakeWood ',
        state: 'Colorado',
        familyfriendly: true,
        petFrienly: true,
        img: '../assets/house.jpg'
      },
      { zip: '80232',
        city: 'LakeWood ',
        state: 'Colorado',
        familyfriendly: true,
        petFrienly: true,
        img: '../assets/house.jpg'
      },
      { zip: '80232',
        city: 'LakeWood ',
        state: 'Colorado',
        familyfriendly: true,
        petFrienly: true,
        img: '../assets/house.jpg'
      },
      { zip: '80232',
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
