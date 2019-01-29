<template>
  <v-container fluid ma-0 pa-0 fill-height>
    <v-layout text-xs-center wrap justify-center>
      <v-flex xs12>
        <v-img max-height='400' :src="require('../assets/hurricane.png')" class='my-3' contain></v-img>
      </v-flex>
      <PostDonate />
      <v-flex mb-5>
        <h2 class='display-1 font-weight-bold mb-2'>Your Listed Spaces</h2>
      </v-flex>
      <v-flex mb-4 xs10>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import PostDonate from '../components/PostDonate'

export default {
  components: {
    PostDonate
  }
}
</script>
