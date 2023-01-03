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
                          v-model="product.name"
                          :counter="50"
                          label="product name"
                          name="name"
                          ></v-text-field>
                          <span :v-show="errors.has('name')" style="color: red;">{{ errors.first('name') }}</span>

                          <v-text-field
                          v-validate="'required|max:50'"
                            v-model="product.description"
                            :counter="50"
                            label="Description"
                            name="description"
                          ></v-text-field>
                          <span :v-show="errors.has('description')" style="color: red;">{{ errors.first('description') }}</span>
                          
                          <v-text-field
                            v-validate="'required|integer|max:4'"
                            v-model="product.price"
                            name="price"
                            label="price"
                            required
                          ></v-text-field>
                          <span :v-show="errors.has('price')" style="color: red;">{{ errors.first('price') }}</span>
                          
                          <v-text-field
                            v-model="product.quantity"
                            v-validate="'required|integer|max:4'"
                            :rules="namedRules"
                            label="quantity"
                            name="quantity"
                            type="number"
                            required
                          ></v-text-field>
                          <span :v-show="errors.has('quantity')" style="color: red;">{{ errors.first('quantity') }}</span>
                        </v-form>
                  </div>
                    <v-card-actions class="justify-end">
                      <v-btn
                            :disabled="!valid"
                            color="success"
                            class="mr-4"
                            @click="addProduct(dialog)"
                          >
                            add product
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
  import products from '../products'; 
  export default {
    data: () => ({
      product:{
        name: '',
        description:'',
        price: null,
        quantity:null,
      },
      valid: false,
      namedRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 50) || 'Name must be less than 50 characters',
      ],

    }), 

    methods: {
      async addProduct (dialog) {
        let valid = false;
        valid = await this.$validator.validateAll()
        this.valid = valid;
        console.log(this.valid);
        console.log(valid);
        if(this.product.name && this.product.description && this.product.price && this.product.quantity && valid ) {
          products.push(this.product)
          dialog.value = false
          this.EmptyFieds();
        }
      },
      EmptyFieds () {
        this.product = {
            name: '',
            description:'',
            price: null,
            quantity:null,
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