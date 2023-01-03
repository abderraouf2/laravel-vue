<template>
 <v-simple-table class="tableWrapper" style="width:100vw">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left"  style="width:30vw">
            Name
          </th>
          <th class="text-left"  style="width:25vw">
            price
          </th>
          <th class="text-left"  style="width:25vw">
            quantity
          </th>
          <th class="text-left"  style="width:20vw">
            
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="product in products"
          :key="product.id"
        >
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.quantity }}</td>
          <td>

             


              <EditProduct :product="product" />


              <v-dialog
                transition="dialog-bottom-transition"
                max-width="50vw"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-icon v-bind="attrs"
                      v-on="on">
                        mdi-plus-box
                    </v-icon>
                </template>
                <template v-slot:default="dialog">
                  <v-card>
                    <Details :product="product" />
                    <v-card-actions class="justify-end">
                      <v-btn
                        color="error"
                        @click="dialog.value = false"
                      >Close</v-btn>
                    </v-card-actions>
                  </v-card>
                </template>
              </v-dialog>


                  <v-icon color="red"  v-on:click="deleteProduct(product.id)">
                    mdi-delete
                </v-icon>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script >
import EditProduct from './EditProduct.vue';
import Details from './Details.vue';
import products from '../products';

  export default {
    data () {
      return {
        count : 1,
        absolute: true,
        opacity: 1,
        overlayDetails: false,
        overlayEdit: false,
        products: products,
        value: false
      }

    },

    components: {
      EditProduct,
      Details
    },
    
    methods : {
      deleteProduct(index) {
        console.log(index);
        products.splice(products.findIndex(product => product.id === index),1);
      }
     
    }
  }
</script>

<style>
  .tableWrapper{
    width: 100vw;
  }
</style>
