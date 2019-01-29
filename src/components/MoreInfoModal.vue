<template>
    <v-layout row justify-center>
        <v-dialog v-model="infoModal" persistent max-width="600px">
          <v-btn slot="activator" flat color='red'>Additional Options</v-btn>
          <v-card>
            <v-card-title>
              <span class="headline">Additional Options</span>
            </v-card-title>
            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12 sm6 md4>
                    <v-checkbox input-value="true" value disabled label='Family Friendly'></v-checkbox>
                    <v-checkbox input-value="true" value disabled label='Public Transportation'></v-checkbox>
                    <v-checkbox input-value="true" value disabled label='Handicapped Acces'></v-checkbox>
                    <v-checkbox input-value="true" value disabled label='Washer Dryer'></v-checkbox>
                    <v-checkbox input-value="true" value disabled label='Laundromat Near by'></v-checkbox>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red" flat @click="infoModal = false">Close</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-layout>
</template>

<script>

export default {
  data: () => ({
    infoModal: false
  })
}
</script>
