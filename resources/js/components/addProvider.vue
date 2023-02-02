<template>
    


    <v-dialog
                    transition="dialog-bottom-transition"
                    max-width="50vw"
                  >
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            v-bind="attrs"
                            v-on="on"
                            class="mx-2"
                            fab
                            dark
                            color="indigo"
                            >
                            <v-icon dark>
                                mdi-plus
                            </v-icon>
                        </v-btn>
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
                              <v-text-field
                              v-validate="'required|max:20'"
                              v-model="provider.name"
                              :counter="50"
                              label="name"
                              name="name"
                              ></v-text-field>
                              <span :v-show="errors.has('name')" style="color: red;">{{ errors.first('name') }}</span>
    
                              <v-text-field
                              v-validate="'required|email'"
                                v-model="provider.email"
                                :counter="50"
                                label="email"
                                name="email"
                              ></v-text-field>
                              <span :v-show="errors.has('email')" style="color: red;">{{ errors.first('email') }}</span>
                              
                              <v-text-field
                                v-validate="'required|integer|digits:10'"
                                v-model="provider.phone"
                                name="phone"
                                label="phone number"
                              ></v-text-field>
                              <span :v-show="errors.has('phone')" style="color: red;">{{ errors.first('phone') }}</span>
                              
                              <v-text-field
                                v-model="provider.address"
                                v-validate="'required'"
                                label="address"
                                name="address"
                              ></v-text-field>
                              <span :v-show="errors.has('address')" style="color: red;">{{ errors.first('address') }}</span>
                            </v-form>
                      </div>
                        <v-card-actions class="justify-end">
                          <v-btn
                                :disabled="!valid"
                                color="success"
                                class="mr-4"
                                @click="addprovider(dialog)"
                              >
                                add provider
                              </v-btn>
                          <v-btn
                            color="error"
                            class="mr-4"
                            @click="dialog.value = false; EmptyFieds()"
                          >Close</v-btn>
                        </v-card-actions>
                      </v-card>
                    </template>
                  </v-dialog>
    </template>
    
    <script>
      import providers from '../providers'; 
      export default {
        data: () => ({
          provider:{
            name: '',
            email:'',
            phone: null,
            address:'',
          },
          valid: false,
          namedRules: [
            v => !!v || 'Name is required',
            v => (v && v.length <= 50) || 'Name must be less than 50 characters',
          ],
    
        }),
    
        methods: {
          async addprovider (dialog) {
            let valid = false;
            valid = await this.$validator.validateAll()
            this.valid = valid;
            
            console.log(valid);
            if(this.provider.name && this.provider.email && this.provider.phone && this.provider.address && valid ) {
              providers.push(this.provider)
              console.log(this.valid);
              dialog.value = false
              this.EmptyFieds();
            }
          },
          EmptyFieds () {
            this.provider = {
                name: '',
                email:'',
                phone: null,
                address:'',
              };
          }
          
        },
      }
    </script>
    <style>
     .formWrapper{
        height: 50vh;
        width: 50vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
     }
    </style>