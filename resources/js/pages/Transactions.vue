
<template>
<div class="wrapper">
        <SideBar width="20vw" />
        <div class="container1">
            <div class="btnwrapper">
              
            </div>
              <v-container fluid>
                <v-row align="center" style="width: 60vw;">
                <v-col
                    style="width: 50vw;"
                    class="d-flex"
                    cols="12"
                    sm="6"
                    
                >
                    <v-select
                    :items="this.Providers"
                    label="Select provider"
                    v-model="selectedProvider"
                    dense
                    solo
                    ></v-select>
                </v-col>

                </v-row>
                
                <v-row align="center" style="width: 60vw;" >

                    <v-col
                    style="width: 50vw;"
                    class="d-flex"
                    cols="12"
                    sm="6"
                >
                    <v-select
                    :items="Clients"
                    label="Select client"
                    v-model="selectedClient"
                    dense
                    solo
                    ></v-select>
                </v-col>
                </v-row>




                <div v-for="productList in productsList">
                        <v-row align="center" style="width: 80vw;">

                            <v-col
                            style="width: 50vw;"
                            class="d-flex"
                            cols="12"
                            sm="6"
                            >
                            <v-select
                            v-validate="'required'"
                            :items="Products"
                            label="Select product"
                            v-model="productList.name"
                            dense
                            solo
                            @change="getProductPrice(productList)"
                            ></v-select>
                            </v-col>
                            <v-col 
                                style="width: 5vw;"
                                class="d-flex"
                                cols="1"
                                >
                                <v-text-field
                                    v-validate="'required|integer'"
                                    v-model="productList.quantity"
                                    label="quantity"
                                    @change="updatePrice(productList)"
                                    required
                                ></v-text-field>
                            </v-col>
                            <v-col  style="width: 5vw;"
                                    class="d-flex"
                                    cols="1">
                                <h6>{{ productList.total }}</h6>
                            </v-col>
                            <v-btn
                                class="mx-2"
                                fab
                                dark
                                color="indigo"
                                @click="addProduct(productList)"
                                >
                                <v-icon dark>
                                    mdi-plus
                                </v-icon>
                                </v-btn>
                                <v-btn  v-if="productsList.length > 1"
                                    class="mx-2"
                                    fab
                                    dark
                                    color="error"
                                    @click="deleteProduct(productList)"
                                    >
                                    <v-icon dark>
                                        mdi-minus
                                    </v-icon>
                                    </v-btn>
                        </v-row>
                </div>
                <h3>Total: {{ total }}</h3>
            </v-container>
         </div>
</div>
</template>


<script>
import SideBar from '../components/SideBar.vue';
import products from '../products';
import clients from '../clients';
import providers from '../providers';

export default {
    data: () => {
        return {
            Providers: [],
            selectedProvider:'',
            selectedClient: '',
            selectedProduct:'',
            Clients: [],
            Products: [],
            quantity:null,
            total:0,
            productsList: [{name:'', quantity:'', total: 0}]
        }
    },
    components :{
        SideBar
    },
    methods : {
        getProductPrice (selectedProduct) {
            var index = products.findIndex(product => product.name === selectedProduct.name)
            this.quantity=1;
        },
        updatePrice(selectedProduct){
            var index = products.findIndex(product => product.name === selectedProduct.name)
            selectedProduct.total = selectedProduct.quantity*products[index].price
            // this.productsList.push({name:products[index].name, quantity:this.quantity, price:this.total })
            console.log(this.productsList);
        },
        async addProduct (selectedProduct) {
            let valid = false;
            valid = await this.$validator.validateAll();
            var index = this.productsList.findIndex(product => product.name === selectedProduct.name)

            if (valid && !index ) {
                this.productsList.name = selectedProduct.name
                this.productsList.quantity = selectedProduct.quantity
                this.productsList.total = selectedProduct.price
                this.total += selectedProduct.total;
                console.log(this.total);
                this.productsList.push({name:'', quantity:0, total:0 })
            }
        },
        deleteProduct(productList) {
            const productToDelete = this.productsList.findIndex(product => product.name === productList.name)
            console.log(productToDelete);
            this.total = this.total - this.productsList[productToDelete].total
            this.productsList.splice(productToDelete,1);
        }

    },
    mounted(){
        providers.forEach(provider => (this.Providers.push(provider.name)));
        clients.forEach(client => (this.Clients.push(client.name)) );
        products.forEach(product => (this.Products.push(product.name)))
    }
}
</script>