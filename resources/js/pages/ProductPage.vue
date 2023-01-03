

<template>
    <div class="wrapper">
        <SideBar width="20vw" />
        <div class="container1">
            <div class="btnwrapper">
              <AddProduct />
            </div>
            <ProductList />
         </div>
    </div>
</template>

<script>
    import ProductList from '../components/ProductList';
    import SideBar from '../components/SideBar.vue';
    import Button from '../components/Button.vue';
    import AddProduct from './AddProduct.vue'
    export default{
        data: () => ({
        absolute: true,
        overlay: false,
        opacity: .7,
        }),
        components : {
            SideBar,
            ProductList,
            Button,
            AddProduct
        }
    }
</script>

<style>
    .wrapper{
        display: flex;
        flex-direction: row;
        width: 100vw;
    }
    .container1{
        display: flex;
        flex-direction: column;
        padding: 0;
        margin: 0;
        padding-top: 5%;
    }
    .btnwrapper{
        width: 95%;
        display: flex;
        justify-content: flex-end;
    }
    .overlay{
        width: 50vw;
        height: 50vh;
        top: 25%;
        left: 25%;
    }
    .btn{
        float: right;
        margin-right: 10px;
    }
</style>