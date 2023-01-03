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
                            <h4>{{ product.name }}</h4>
                          </div>
                          <v-text-field
                            v-validate="'required|max:20'"
                            v-model="editedProduct.name"
                            :counter="50"
                            label="product name"
                            :value="editedProduct.name"
                            name="name"
                          ></v-text-field>
                          <span :v-show="errors.has('name')" style="color: red;">{{ errors.first('name') }}</span>

                          <v-text-field
                            v-validate="'required|max:50'"
                            v-model="editedProduct.description"
                            :counter="50"
                            label="Description"
                            :value="product.description"
                            name="description"
                          ></v-text-field>
                          <span :v-show="errors.has('description')" style="color: red;">{{ errors.first('description') }}</span>

                          <v-text-field
                            v-validate="'required|integer|max:4'"
                            v-model="editedProduct.price"
                            label="price"
                            :value="product.price"
                            name="price"
                          ></v-text-field>
                          <span :v-show="errors.has('price')" style="color: red;">{{ errors.first('price') }}</span>

                          <v-text-field
                          v-validate="'required|integer|max:4'"
                            v-model="editedProduct.quantity"
                            label="quantity"
                            :value="product.quantity"
                            name="quantity"
                          ></v-text-field>
                          <span :v-show="errors.has('quantity')" style="color: red;">{{ errors.first('quantity') }}</span>
                          

                        </v-form>
                  </div>

                    <v-card-actions class="justify-end">
                      <v-btn
                            color="success"
                            class="mr-4"
                            @click="update(product.id, dialog)"
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
  import products from '../products';
  export default {
    data: function () {
        return {
          editedProduct: {
            name:this.product.name,
            description:this.product.description,
            price: this.product.price,
            quantity:this.product.quantity
      },
      valid: true,
      }
    },
    props :{
        product: Object,
    },  

    methods: {
     
      async update (id, dialog) {
        let valid = false;
        valid = await this.$validator.validateAll()
        console.log(valid);
        if(this.editedProduct.name && this.editedProduct.description && this.editedProduct.price && this.editedProduct.quantity && valid ) {
        var index = products.findIndex(product => product.id === id)
        dialog.value = false
        products[index].name = this.editedProduct.name;
        products[index].description = this.editedProduct.description;
        products[index].price = this.editedProduct.price;
        products[index].quantity = this.editedProduct.quantity;
        }
      }
    },
  }
</script>