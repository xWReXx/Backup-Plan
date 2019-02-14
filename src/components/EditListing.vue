<template>
  <v-layout row justify-center>
    <v-dialog v-model='donateModal' persistent max-width='600px'>
      <v-btn slot='activator' flat color='red' dark>Edit Listing</v-btn>
      <v-card>
        <v-card-title>
          <span class='headline'>Donate Living Space</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field v-model='adress' label='Adress*' required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field v-model='city' label='City*' persistent-hint required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field v-model='state' label='State*' required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field v-model='zipcode' label='Zipcode*' required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field v-model='occupancy' label='Max Occupancy*' required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-checkbox v-model="ammenities" label='Pets' value='Pets'></v-checkbox>
                <v-checkbox v-model="ammenities" label='Family Friendly' value='Family Friendly'></v-checkbox>
                <v-checkbox v-model="ammenities" label='Public Transportation' value='Public Transportation'></v-checkbox>
                <v-checkbox v-model="ammenities" label='Handicapped Acces' value='Handicapped Acces'></v-checkbox>
                <v-checkbox v-model="ammenities" label='Washer Dryer' value='Washer Dryer'></v-checkbox>
                <v-checkbox v-model="ammenities" label='Laundromat Near by' value='Laundromat Near by'></v-checkbox>
                <v-checkbox v-model="ammenities" label='Kitchen Access' value='Kitchen Access'></v-checkbox>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color='red' to="/donate1" flat @click='donateModal = false'>Save Changes</v-btn>
          <v-btn color='red' flat @click='donateModal = false'>Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>

export default {

  data: () => ({
    donateModal: false,
    adress: '',
    city: '',
    state: '',
    ammenities: [],
    occupancy: '',
    zipcode: ''
  })
}
</script>
