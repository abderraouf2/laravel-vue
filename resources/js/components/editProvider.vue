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
                            <h4>{{ Provider.name }}</h4>
                          </div>
                          <v-text-field
                            v-validate="'required|max:20'"
                            v-model="editedProvider.name"
                            :counter="50"
                            label="Provider name"
                            :value="editedProvider.name"
                            name="name"
                          ></v-text-field>
                          <span :v-show="errors.has('name')" style="color: red;">{{ errors.first('name') }}</span>

                          <v-text-field
                            v-validate="'required|email|max:50'"
                            v-model="editedProvider.email"
                            :counter="50"
                            label="email"
                            :value="Provider.email"
                            name="email"
                          ></v-text-field>
                          <span :v-show="errors.has('email')" style="color: red;">{{ errors.first('email') }}</span>

                          <v-text-field
                            v-validate="'required|integer|digits:10'"
                            v-model="editedProvider.phone"
                            label="phone"
                            :value="Provider.phone"
                            name="phone"
                          ></v-text-field>
                          <span :v-show="errors.has('phone')" style="color: red;">{{ errors.first('phone') }}</span>

                          <v-text-field
                          v-validate="'required'"
                            v-model="editedProvider.address"
                            label="address"
                            :value="Provider.address"
                            name="address"
                          ></v-text-field>
                          <span :v-show="errors.has('address')" style="color: red;">{{ errors.first('address') }}</span>
                          

                        </v-form>
                  </div>

                    <v-card-actions class="justify-end">
                      <v-btn
                            color="success"
                            class="mr-4"
                            @click="update(Provider.id, dialog)"
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
  import Providers from '../providers';
  export default {
    data: function () {
        return {
          editedProvider: {
            name:this.Provider.name,
            email:this.Provider.email,
            phone: this.Provider.phone,
            address:this.Provider.address
      },
      }
    },
    props :{
        Provider: Object,
        value: Boolean, 
        default: {value: true}
    },  

    methods: {
     
      async update (id, dialog) {
        let valid = false;
        valid = await this.$validator.validateAll()
        console.log(valid);
        if(this.editedProvider.name && this.editedProvider.email && this.editedProvider.phone && this.editedProvider.address && valid ) {
        var index = Providers.findIndex(Provider => Provider.id === id)
        dialog.value = false
        Providers[index].name = this.editedProvider.name;
        Providers[index].email = this.editedProvider.email;
        Providers[index].phone = this.editedProvider.phone;
        Providers[index].address = this.editedProvider.address;
        }
      }
    },
  }
</script>