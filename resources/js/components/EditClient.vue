<template>

    <v-dialog
                transition="dialog-bottom-transition"
                max-width="50vw"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-icon v-bind="attrs"
                      v-on="on" color="blue">
                        mdi-pencil
                    </v-icon>
                </template>
                <template v-slot:default="dialog">
                  <v-card>
                    
                    <div class="formWrapper">
                        <v-form
                          ref="form"
                          v-model="valid"
                          lazy-validation
                          style="width: 40vw;"
                        >
                          <div style="width: 100%;height: 5vh; display: flex; justify-content: center; align-items: center; ">
                            <h4>{{ Client.name }}</h4>
                          </div>
                          <v-text-field
                            v-validate="'required|max:20'"
                            v-model="editedClient.name"
                            :counter="50"
                            label="Client name"
                            :value="editedClient.name"
                            name="name"
                          ></v-text-field>
                          <span :v-show="errors.has('name')" style="color: red;">{{ errors.first('name') }}</span>

                          <v-text-field
                            v-validate="'required|email|max:50'"
                            v-model="editedClient.email"
                            :counter="50"
                            label="email"
                            :value="Client.email"
                            name="email"
                          ></v-text-field>
                          <span :v-show="errors.has('email')" style="color: red;">{{ errors.first('email') }}</span>

                          <v-text-field
                            v-validate="'required|integer|digits:10'"
                            v-model="editedClient.phone"
                            label="phone"
                            :value="Client.phone"
                            name="phone"
                          ></v-text-field>
                          <span :v-show="errors.has('phone')" style="color: red;">{{ errors.first('phone') }}</span>

                          <v-text-field
                          v-validate="'required'"
                            v-model="editedClient.address"
                            label="address"
                            :value="Client.address"
                            name="address"
                          ></v-text-field>
                          <span :v-show="errors.has('address')" style="color: red;">{{ errors.first('address') }}</span>
                          

                        </v-form>
                  </div>

                    <v-card-actions class="justify-end">
                      <v-btn
                            color="success"
                            class="mr-4"
                            @click="update(Client.id, dialog)"
                          >
                            update
                          </v-btn>
                      <v-btn
                        
                        color="error"
                        class="mr-4"
                        @click="dialog.value = false"
                      >Close</v-btn>
                    </v-card-actions>
                  </v-card>
                </template>
              </v-dialog>

</template>

<script>
  import clients from '../clients';
  export default {
    data: function () {
        return {
          editedClient: {
            name:this.Client.name,
            email:this.Client.email,
            phone: this.Client.phone,
            address:this.Client.address
      },
      valid: true,
      nameRules: [
        // v => !!v || 'Name is required',
        // v => (v && v.length <= 50) || 'Name must be less than 50 characters',
      ],}
    },
    props :{
        Client: Object,
        value: Boolean, 
        default: {value: true}
    },  

    methods: {
     
      async update (id, dialog) {
        let valid = false;
        valid = await this.$validator.validateAll()
        console.log(valid);
        if(this.editedClient.name && this.editedClient.email && this.editedClient.phone && this.editedClient.address && valid ) {
        var index = clients.findIndex(Client => Client.id === id)
        dialog.value = false
        clients[index].name = this.editedClient.name;
        clients[index].email = this.editedClient.email;
        clients[index].phone = this.editedClient.phone;
        clients[index].address = this.editedClient.address;
        }
      }
    },
  }
</script>